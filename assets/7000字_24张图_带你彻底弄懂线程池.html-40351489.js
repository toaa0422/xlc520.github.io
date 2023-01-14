import{_ as a,V as c,W as t,X as e,Y as i,$ as d,Z as l,E as r}from"./framework-debd98b7.js";const g={},n=e("h1",{id:"_7000字-24张图-带你彻底弄懂线程池",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7000字-24张图-带你彻底弄懂线程池","aria-hidden":"true"},"#"),i(" 7000字+24张图，带你彻底弄懂线程池")],-1),p={href:"https://kdocs.cn/l/cg3BmyfdA9Ko",target:"_blank",rel:"noopener noreferrer"},s=l('<figure><img src="https://static.xlc520.ml/blogImage/MBJI4AQAPA.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>今天跟大家聊一聊无论是在工作中常用还是在面试中常问的线程池，通过画图的方式来彻底弄懂线程池的工作原理，以及在实际项目中该如何自定义适合业务的线程池。</p><h3 id="一、什么是线程池" tabindex="-1"><a class="header-anchor" href="#一、什么是线程池" aria-hidden="true">#</a> 一、什么是线程池</h3><p>线程池其实是一种池化的技术的实现，池化技术的核心思想其实就是实现资源的一个复用，避免资源的重复创建和销毁带来的性能开销。在线程池中，线程池可以管理一堆线程，让线程执行完任务之后不会进行销毁，而是继续去处理其它线程已经提交的任务。</p><p>使用线程池的好处</p><ul><li><strong>降低资源消耗。</strong> 通过重复利用已创建的线程降低线程创建和销毁造成的消耗。</li><li><strong>提高响应速度。</strong> 当任务到达时，任务可以不需要的等到线程创建就能立即执行。</li><li><strong>提高线程的可管理性。</strong> 线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统 的稳定性，使用线程池可以进行统一的分配，调优和监控。</li></ul><h3 id="二、线程池的构造" tabindex="-1"><a class="header-anchor" href="#二、线程池的构造" aria-hidden="true">#</a> 二、线程池的构造</h3><p>Java中主要是通过构建<code>ThreadPoolExecutor</code>来创建线程池的。接下来我们看一下线程池是如何构造出来的</p><p>ThreadPoolExecutor的构造方法</p><figure><img src="https://static.xlc520.ml/blogImage/MBJI4AQA3M.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><code>corePoolSize</code>：线程池中用来工作的核心的线程数量。</li><li><code>maximumPoolSize</code>：最大线程数，线程池允许创建的最大线程数。</li><li><code>keepAliveTime</code>：超出 corePoolSize 后创建的线程存活时间或者是所有线程最大存活时间，取决于配置。</li><li><code>unit</code>：keepAliveTime 的时间单位。</li><li><code>workQueue</code>：任务队列，是一个阻塞队列，当线程数已达到核心线程数，会将任务存储在阻塞队列中。</li><li><code>threadFactory</code> ：线程池内部创建线程所用的工厂。</li><li><code>handler</code>：拒绝策略；当队列已满并且线程数量达到最大线程数量时，会调用该方法处理该任务。</li></ul><p>线程池的构造其实很简单，就是传入一堆参数，然后进行简单的赋值操作。</p><h3 id="三、线程池的运行原理" tabindex="-1"><a class="header-anchor" href="#三、线程池的运行原理" aria-hidden="true">#</a> 三、线程池的运行原理</h3><p>说完线程池的核心构造参数的意思，接下来就来画图讲解这些参数在线程池中是如何工作的。</p><p>线程池刚创建出来是什么样子呢，如下图</p><figure><img src="https://static.xlc520.ml/blogImage/DJKI4AQAQI.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>不错，刚创建出来的线程池中只有一个构造时传入的阻塞队列而已，此时里面并没有的任何线程，但是如果你想要在执行之前已经创建好核心线程数，可以调用<code>prestartAllCoreThreads</code>方法来实现，默认是没有线程的。</p><p>当有线程通过execute方法提交了一个任务，会发生什么呢？</p><p>提交任务的时候，其实会去进行任务的处理</p><p>首先会去判断当前线程池的线程数是否小于核心线程数，也就是线程池构造时传入的参数<code>corePoolSize</code>。</p><p>如果小于，那么就直接通过<code>ThreadFactory</code>创建一个线程来执行这个任务，如图</p><figure><img src="https://static.xlc520.ml/blogImage/CNJY4AQAW4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>当任务执行完之后，线程不会退出，而是会去从阻塞队列中获取任务，如下图</p><figure><img src="https://static.xlc520.ml/blogImage/EFJY4AQALI.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>接下来如果又提交了一个任务，也会按照上述的步骤，去判断是否小于核心线程数，如果小于，还是会创建线程来执行任务，执行完之后也会从阻塞队列中获取任务。这里有个细节，就是提交任务的时候，就算有线程池里的线程从阻塞队列中获取不到任务，如果线程池里的线程数还是小于核心线程数，那么依然会继续创建线程，而不是复用已有的线程。</p><p>如果线程池里的线程数不再小于核心线程数呢？那么此时就会尝试将任务放入阻塞队列中，入队成功之后，如图</p><figure><img src="https://static.xlc520.ml/blogImage/MJJI4AQAKA.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这样在阻塞的线程就可以获取到任务了。</p><p>但是，随着任务越来越多，队列已经满了，任务放入失败了，那怎么办呢？</p><p>此时就会判断当前线程池里的线程数是否小于最大线程数，也就是入参时的<code>maximumPoolSize</code>参数</p><p>如果小于最大线程数，那么也会创建非核心线程来执行提交的任务，如图</p><figure><img src="https://static.xlc520.ml/blogImage/MJJI4AQA4I.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>所以，从这里可以发现，就算队列中有任务，新创建的线程还是优先处理这个提交的任务，而不是从队列中获取已有的任务执行，从这可以看出，先提交的任务不一定先执行。</p><p>但是不幸的事发生了，线程数已经达到了最大线程数量，那么此时会怎么办呢？</p><p>此时就会执行拒绝策略，也就是构造线程池的时候，传入的<code>RejectedExecutionHandler</code>对象，来处理这个任务。</p><figure><img src="https://static.xlc520.ml/blogImage/MNJI4AQA5Y.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><code>RejectedExecutionHandler</code>的实现JDK自带的默认有4种</p><ul><li><code>AbortPolicy</code>：丢弃任务，抛出运行时异常</li><li><code>CallerRunsPolicy</code>：由提交任务的线程来执行任务</li><li><code>DiscardPolicy</code>：丢弃这个任务，但是不抛异常</li><li><code>DiscardOldestPolicy</code>：从队列中剔除最先进入队列的任务，然后再次提交任务</li></ul><p>线程池创建的时候，如果不指定拒绝策略就默认是<code>AbortPolicy</code>策略。当然，你也可以自己实现<code>RejectedExecutionHandler</code>接口，比如将任务存在数据库或者缓存中，这样就数据库或者缓存中获取到被拒绝掉的任务了。</p><p>到这里，我们发现，线程池构造的几个参数<code>corePoolSize、maximumPoolSize、workQueue、threadFactory、handler</code>我们都在上述的执行过程中讲到了，那么还差两个参数<code>keepAliveTime</code>和<code>unit</code>(unit是keepAliveTime的时间单位)没讲到，所以<code>keepAliveTime</code>是如何起到作用的呢，这个问题留到后面分析。</p><p>说完整个执行的流程，接下来看看execute方法代码是如何实现的。</p><figure><img src="https://static.xlc520.ml/blogImage/HBJY4AQA3M.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><code>workerCountOf(c)&lt;corePoolSize</code>:这行代码就是判断是否小于核心线程数，是的话就通过addWorker方法，addWorker就是添加线程来执行任务。</li><li><code>workQueue.offer(command)</code>：这行代码就表示尝试往阻塞队列中添加任务</li><li>添加失败之后就会再次调用addWorker方法尝试添加非核心线程来执行任务</li><li>如果还是添加非核心线程失败了，那么就会调用<code>reject(command)</code>来拒绝这个任务。</li></ul><p>最后再来另画一张图总结execute执行流程</p><figure><img src="https://static.xlc520.ml/blogImage/IJJY4AQADE.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="四、线程池中线程实现复用的原理" tabindex="-1"><a class="header-anchor" href="#四、线程池中线程实现复用的原理" aria-hidden="true">#</a> 四、线程池中线程实现复用的原理</h3><p>线程池的核心功能就是实现了线程的重复利用，那么线程池是如何实现线程的复用呢？</p><p>线程在线程池内部其实是被封装成一个Worker对象</p><figure><img src="https://static.xlc520.ml/blogImage/K5JY4AQAW4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Worker继承了AQS，也就是有一定锁的特性。</p><p>创建线程来执行任务的方法上面提到是通过addWorker方法创建的。在创建Worker对象的时候，会把线程和任务一起封装到Worker内部，然后调用runWorker方法来让线程执行任务，接下来我们就来看一下runWorker方法。</p><figure><img src="https://static.xlc520.ml/blogImage/MRJI4AQA7A.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>从这张图可以看出线程执行完任务不会退出的原因，runWorker内部使用了while死循环，当第一个任务执行完之后，会不断地通过getTask方法获取任务，只要能获取到任务，就会调用run方法，继续执行任务，这就是线程能够复用的主要原因。</p><p>但是如果从getTask获取不到方法的时候，最后就会调用finally中的<code>processWorkerExit</code>方法，来将线程退出。</p><p>这里有个一个细节就是，因为Worker继承了AQS，每次在执行任务之前都会调用Worker的lock方法，执行完任务之后，会调用<code>unlock</code>方法，这样做的目的就可以通过<code>Woker</code>的加锁状态就能判断出当前线程是否正在运行任务。</p><p>如果想知道线程是否正在运行任务，只需要调用Woker的<code>tryLock</code>方法，根据是否加锁成功就能判断，加锁成功说明当前线程没有加锁，也就没有执行任务了，在调用<code>shutdown</code>方法关闭线程池的时候，就用这种方式来判断线程有没有在执行任务，如果没有的话，来尝试打断没有执行任务的线程。</p><h3 id="五、线程是如何获取任务的以及如何实现超时的" tabindex="-1"><a class="header-anchor" href="#五、线程是如何获取任务的以及如何实现超时的" aria-hidden="true">#</a> 五、线程是如何获取任务的以及如何实现超时的</h3><p>上一节我们说到，线程在执行完任务之后，会继续从getTask方法中获取任务，获取不到就会退出。接下来我们就来看一看getTask方法的实现。</p><figure><img src="https://static.xlc520.ml/blogImage/MVJI4AQARI.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>getTask方法，前面就是线程池的一些状态的判断，这里有一行代码</p><p>boolean timed = allowCoreThreadTimeOut || wc &gt; corePoolSize;</p><p>这行代码是判断，当前过来获取任务的线程是否可以超时退出。如果<code>allowCoreThreadTimeOut</code>设置为true或者线程池当前的线程数大于核心线程数，也就是<code>corePoolSize</code>，那么该获取任务的线程就可以超时退出。</p><p>那是怎么做到超时退出呢，就是这行核心代码</p><p>Runnable r = timed ? workQueue.poll(keepAliveTime, TimeUnit.NANOSECONS) : workQueue.take();</p><p>会根据是否允许超时来选择调用阻塞队列<code>workQueue</code>的poll方法或者take方法。如果允许超时，则会调用poll方法，传入<code>keepAliveTime</code>，也就是构造线程池时传入的空闲时间，这个方法的意思就是从队列中阻塞<code>keepAliveTime</code>时间来获取任务，获取不到就会返回null；如果不允许超时，就会调用take方法，这个方法会一直阻塞获取任务，直到从队列中获取到任务位置。从这里可以看到<code>keepAliveTime</code>是如何使用的了。</p><p>所以到这里应该就知道线程池中的线程为什么可以做到空闲一定时间就退出了吧。其实最主要的是利用了阻塞队列的poll方法的实现，这个方法可以指定超时时间，一旦线程达到了<code>keepAliveTime</code>还没有获取到任务，那么就会返回null，上一小节提到，<code>getTask</code>方法返回null，线程就会退出。</p><p>这里也有一个细节，就是判断当前获取任务的线程是否可以超时退出的时候，如果将<code>allowCoreThreadTimeOut</code>设置为true，那么所有线程走到这个timed都是true，那么所有的线程，包括核心线程都可以做到超时退出。如果你的线程池需要将核心线程超时退出，那么可以通过<code>allowCoreThreadTimeOut</code>方法将<code>allowCoreThreadTimeOut</code>变量设置为true。</p><p>整个getTask方法以及线程超时退出的机制如图所示</p><figure><img src="https://static.xlc520.ml/blogImage/UVJY4AQARI.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="六、线程池的5种状态" tabindex="-1"><a class="header-anchor" href="#六、线程池的5种状态" aria-hidden="true">#</a> 六、线程池的5种状态</h3><p>线程池内部有5个常量来代表线程池的五种状态</p><figure><img src="https://static.xlc520.ml/blogImage/VRJY4AQAWU.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li><strong>RUNNING</strong>：线程池创建时就是这个状态，能够接收新任务，以及对已添加的任务进行处理。</li><li><strong>SHUTDOWN</strong>：调用<code>shutdown</code>方法线程池就会转换成<code>SHUTDOWN</code>状态，此时线程池不再接收新任务，但能继续处理已添加的任务到队列中任务。</li><li><strong>STOP</strong>：调用<code>shutdownNow</code>方法线程池就会转换成<code>STOP</code>状态，不接收新任务，也不能继续处理已添加的任务到队列中任务，并且会尝试中断正在处理的任务的线程。</li><li><strong>TIDYING</strong>：</li></ul><p><code>SHUTDOWN</code> 状态下，任务数为 0， 其他所有任务已终止，线程池会变为 <code>TIDYING</code> 状态。</p><p>线程池在 <code>SHUTDOWN</code> 状态，任务队列为空且执行中任务为空，线程池会变为 <code>TIDYING</code> 状态。</p><p>线程池在 <code>STOP</code> 状态，线程池中执行中任务为空时，线程池会变为 <code>TIDYING</code> 状态。</p><ul><li><strong>TERMINATED</strong>：线程池彻底终止。线程池在 <code>TIDYING</code> 状态执行完 <code>terminated()</code>方法就会转变为 <code>TERMINATED</code> 状态。</li></ul><p>线程池状态具体是存在ctl成员变量中，ctl中不仅存储了线程池的状态还存储了当前线程池中线程数的大小</p><p>private final AtomicInteger ctl = new AtomicInteger(ctlOf(RUNNING, 0));</p><p>最后画个图来总结一下这5种状态的流转</p><figure><img src="https://static.xlc520.ml/blogImage/MZJI4AQA3M.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>其实，在线程池运行过程中，绝大多数操作执行前都得判断当前线程池处于哪种状态，再来决定是否继续执行该操作。</p><h3 id="七、线程池的关闭" tabindex="-1"><a class="header-anchor" href="#七、线程池的关闭" aria-hidden="true">#</a> 七、线程池的关闭</h3><p>线程池提供了<code>shutdown</code>和<code>shutdownNow</code>两个方法来关闭线程池。</p><h5 id="shutdown方法" tabindex="-1"><a class="header-anchor" href="#shutdown方法" aria-hidden="true">#</a> <strong>shutdown方法</strong></h5><figure><img src="https://static.xlc520.ml/blogImage/M5JI4AQA2Q.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>就是将线程池的状态修改为<code>SHUTDOWN</code>，然后尝试打断空闲的线程（如何判断空闲，上面在说Worker继承AQS的时候说过），也就是在阻塞等待任务的线程。</p><h5 id="shutdownnow方法" tabindex="-1"><a class="header-anchor" href="#shutdownnow方法" aria-hidden="true">#</a> <strong>shutdownNow方法</strong></h5><figure><img src="https://static.xlc520.ml/blogImage/M5JI4AQA7A.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>就是将线程池的状态修改为STOP，然后尝试打断所有的线程，从阻塞队列中移除剩余的任务，这也是为什么<code>shutdownNow</code>不能执行剩余任务的原因。</p><p>所以也可以看出<code>shutdown</code>方法和<code>shutdownNow</code>方法的主要区别就是，<code>shutdown</code>之后还能处理在队列中的任务，<code>shutdownNow</code>直接就将任务从队列中移除，线程池里的线程就不再处理了。</p><h3 id="八、线程池的监控" tabindex="-1"><a class="header-anchor" href="#八、线程池的监控" aria-hidden="true">#</a> 八、线程池的监控</h3><p>在项目中使用线程池的时候，一般需要对线程池进行监控，方便出问题的时候进行查看。线程池本身提供了一些方法来获取线程池的运行状态。</p><ul><li>getCompletedTaskCount：已经执行完成的任务数量</li><li>getLargestPoolSize：线程池里曾经创建过的最大的线程数量。这个主要是用来判断线程是否满过。</li><li>getActiveCount：获取正在执行任务的线程数据</li><li>getPoolSize：获取当前线程池中线程数量的大小</li></ul><p>除了线程池提供的上述已经实现的方法，同时线程池也预留了很对扩展方法。比如在<code>runWorker</code>方法里面，在执行任务之前会回调<code>beforeExecute</code>方法，执行任务之后会回调<code>afterExecute</code>方法，而这些方法默认都是空实现，你可以自己继承<code>ThreadPoolExecutor</code>来扩展重写这些方法，来实现自己想要的功能。</p><h3 id="九、executors构建线程池以及问题分析" tabindex="-1"><a class="header-anchor" href="#九、executors构建线程池以及问题分析" aria-hidden="true">#</a> 九、Executors构建线程池以及问题分析</h3><p>JDK内部提供了Executors这个工具类，来快速的创建线程池。</p><p>1）固定线程数量的线程池：核心线程数与最大线程数相等</p><figure><img src="https://static.xlc520.ml/blogImage/NBJI4AQA3M.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>2）单个线程数量的线程池</p><figure><img src="https://static.xlc520.ml/blogImage/NBJI4AQA5Y.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>3）接近无限大线程数量的线程池</p><figure><img src="https://static.xlc520.ml/blogImage/4FJY4AQA3M.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>4)带定时调度功能的线程池</p><figure><img src="https://static.xlc520.ml/blogImage/ZNJY4AQAQI.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>虽然JDK提供了快速创建线程池的方法，但是其实不推荐使用<code>Executors</code>来创建线程池，因为从上面构造线程池可以看出，<code>newFixedThreadPool</code>线程池，由于使用了<code>LinkedBlockingQueue</code>，队列的容量默认是无限大，实际使用中出现任务过多时会导致内存溢出；<code>newCachedThreadPool</code>线程池由于核心线程数无限大，当任务过多的时候，会导致创建大量的线程，可能机器负载过高，可能会导致服务宕机。</p><h3 id="十、线程池的使用场景" tabindex="-1"><a class="header-anchor" href="#十、线程池的使用场景" aria-hidden="true">#</a> 十、线程池的使用场景</h3><p>在java程序中，其实经常需要用到多线程来处理一些业务，但是不建议单纯使用继承Thread或者实现Runnable接口的方式来创建线程，那样就会导致频繁创建及销毁线程，同时创建过多的线程也可能引发资源耗尽的风险。所以在这种情况下，使用线程池是一种更合理的选择，方便管理任务，实现了线程的重复利用。所以线程池一般适合那种需要异步或者多线程处理任务的场景。</p><h3 id="十一、实际项目中如何合理的自定义线程池" tabindex="-1"><a class="header-anchor" href="#十一、实际项目中如何合理的自定义线程池" aria-hidden="true">#</a> 十一、实际项目中如何合理的自定义线程池</h3><p>通过上面分析提到，通过Executors这个工具类来创建的线程池其实都无法满足实际的使用场景，那么在实际的项目中，到底该如何构造线程池呢，该如何合理的设置参数？</p><h5 id="_1-线程数" tabindex="-1"><a class="header-anchor" href="#_1-线程数" aria-hidden="true">#</a> <strong>1）线程数</strong></h5><p>线程数的设置主要取决于业务是IO密集型还是CPU密集型。</p><p>CPU密集型指的是任务主要使用来进行大量的计算，没有什么导致线程阻塞。一般这种场景的线程数设置为CPU核心数+1。</p><p>IO密集型：当执行任务需要大量的io，比如磁盘io，网络io，可能会存在大量的阻塞，所以在IO密集型任务中使用多线程可以大大地加速任务的处理。一般线程数设置为 <code>2*CPU核心数</code></p><p>java中用来获取CPU核心数的方法是：<code>Runtime.getRuntime().availableProcessors();</code></p><h5 id="_2-线程工厂" tabindex="-1"><a class="header-anchor" href="#_2-线程工厂" aria-hidden="true">#</a> <strong>2）线程工厂</strong></h5><p>一般建议自定义线程工厂，构建线程的时候设置线程的名称，这样就在查日志的时候就方便知道是哪个线程执行的代码。</p><h6 id="_3-有界队列" tabindex="-1"><a class="header-anchor" href="#_3-有界队列" aria-hidden="true">#</a> <strong>3）有界队列</strong></h6><p>一般需要设置有界队列的大小，比如<code>LinkedBlockingQueue</code>在构造的时候就可以传入参数，来限制队列中任务数据的大小，这样就不会因为无限往队列中扔任务导致系统的oom。</p>',119);function h(u,m){const o=r("ExternalLinkIcon");return c(),t("div",null,[n,e("p",null,[i("图片失效看 ====》7000字+24张图，带你彻底弄懂线程池 "),e("a",p,[i("https://kdocs.cn/l/cg3BmyfdA9Ko"),d(o)])]),s])}const x=a(g,[["render",h],["__file","7000字_24张图_带你彻底弄懂线程池.html.vue"]]);export{x as default};
