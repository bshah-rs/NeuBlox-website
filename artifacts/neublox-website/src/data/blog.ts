export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  content: string;
}

export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export const blogPosts: BlogPost[] = [
  {
    slug: "more-than-one-pace",
    title: "Intelligent Machines Live at More Than One Pace",
    date: "2026-10-24",
    category: "Robotics",
    author: "NeuBlox Insights",
    excerpt: "Robotics brings together careful planning, quick action, and the steady attention needed to keep people safe.",
    content: `
## Different moments ask for different kinds of attention

A robot moving through the world has to do more than follow a plan. It must make sense of a situation, choose what to do next, and respond when the situation changes. Some moments reward patience and consideration. Others leave little room between noticing a change and reacting to it.

That mix of tempos is easy to miss when we talk about intelligent machines as if they only need to “think.” Real environments ask for thought and action to stay connected. A useful plan has to remain open to new information. A quick response has to remain consistent with the broader task. And safety has to be present throughout, not saved for the final step.

## Coordination matters more than speed alone

Making one part of a system faster does not automatically make the whole experience better. If a quick response loses sight of the goal, or a careful plan cannot adapt, the result can still feel unreliable. The important question is how different kinds of attention work together.

This is a familiar challenge in everyday life. We make plans, notice what has changed, and adjust without stopping to separate those activities into neat stages. Machines that share our spaces will be judged in much the same way: by whether their behavior feels coherent from one moment to the next.

## Designing for the full rhythm of a task

The next chapter of robotics will depend on systems that can balance anticipation with responsiveness. That balance is not a single feature or a single benchmark. It is a way of thinking about the complete task, from the first instruction through the final movement.

When planning, action, and care for people remain aligned, intelligent machines can become more dependable participants in the world around them.
    `.trim()
  },
  {
    slug: "from-data-to-field-deployment",
    title: "From Data to Deployment: The Work Behind Field-Ready Robots",
    date: "2026-10-13",
    category: "Robotics",
    author: "NeuBlox Insights",
    excerpt: "Field deployment takes more than a successful demo: it calls for representative data, safe practice, careful evaluation, and learning from what happens next.",
    content: `
## The field is different from a demo

A controlled demonstration is a useful starting point, but everyday work rarely stays inside carefully prepared conditions. Objects move, routines change, people enter and leave, and small surprises can alter the task. To understand how a robot will behave, teams need examples and tests that reflect that variety—not only the cleanest version of the job.

Collecting useful data in the field takes planning. Teams have to decide what to observe, how to capture different situations, and how to learn from a failed attempt without disrupting the people or work around it. The goal is not to collect everything. It is to gather examples that reveal where behavior is dependable and where it needs more attention.

## Simulation makes practice repeatable

Simulation offers a place to rehearse situations that are difficult, costly, or unsafe to repeat in a real setting. Teams can compare approaches, explore less common conditions, and learn from the same scenario more than once.

But a simulation is still a model of the world, not the world itself. Its assumptions need to be checked against real experience. A result that looks convincing in a simulated setting should be treated as one step toward field confidence, not proof that the work is finished.

## Training is a continuous loop

Useful progress comes from connecting demonstrations, simulated trials, and field observations. Each can expose different gaps. Training can improve behavior, while a separate, thoughtful evaluation helps teams see whether the improvement holds beyond the examples used to create it.

That loop can be described simply: collect examples, practice safely, improve, deploy carefully, evaluate the outcome, and use what was learned to guide the next round. The important part is that each stage informs the next.

## Deployment includes the people and the process

Taking a robot into a workplace also means preparing the people who will work around it. Teams need clear operating expectations, a safe way to pause or recover from unexpected behavior, and a plan for ongoing support.

Field readiness is not a single handoff or a final checkbox. It is the ability to keep learning while protecting the people and operations involved. The strongest deployments are built on that steady cycle of preparation, observation, and improvement.
    `.trim()
  },
  {
    slug: "whole-system-earns-trust",
    title: "Why the Whole System Has to Earn Trust",
    date: "2026-10-06",
    category: "AI Infrastructure",
    author: "NeuBlox Insights",
    excerpt: "People experience a machine as one whole, even when its capabilities are assembled from many separate parts.",
    content: `
## People meet the whole, not the parts

When a machine behaves well, it is tempting to credit the most visible capability. When it behaves unpredictably, people rarely care which component was responsible. They experience the complete interaction: what the machine noticed, how it responded, and whether it remained consistent with what they expected.

That gap between internal complexity and outward experience matters. A system assembled from many separate pieces can work, but every handoff creates another place where assumptions have to match. If those assumptions drift, the burden often falls on the people who use, maintain, or support the machine.

## Integration is part of the experience

Good integration is often quiet. It means that different responsibilities fit together without making the user think about the seams. The same principle applies to safety and reliability. They are not finishing touches that can be added after the rest of a system is complete; they shape what a dependable experience looks like from the beginning.

This is especially important in settings where machines share space with people. A behavior that is easy to understand and consistent over time is easier to trust than one that works only when everything goes as expected.

## Make complexity easier to live with

The goal is not to pretend that complex systems are simple. It is to keep that complexity from becoming someone else’s daily problem. Clear responsibilities, predictable behavior, and thoughtful coordination make systems easier to operate and improve.

As robotics becomes more common, the quality of the whole will matter as much as the promise of any one part. Trust is earned when all the pieces work together in a way people can understand.
    `.trim()
  },
  {
    slug: "gap-between-seeing-and-doing",
    title: "The Gap Between Seeing and Doing",
    date: "2026-09-19",
    category: "Robotics",
    author: "NeuBlox Insights",
    excerpt: "Recognizing a situation is only the beginning; useful robotics depends on dependable action in changing environments.",
    content: `
## A demonstration is a beginning

A polished demonstration can show what a machine is capable of in a carefully prepared moment. Everyday use asks a different question: can it continue to behave well when the scene changes, an object shifts, or another person enters the picture?

Seeing what is happening is only one part of the task. A machine also has to connect that understanding to an action, then stay attentive to what happens next. The real world rarely waits for every condition to be perfect.

## Reliability lives in ordinary moments

People notice reliability through small things. Does the machine respond in a way that makes sense? Can it recover when something unexpected happens? Does it behave with care around the people and objects nearby?

Those questions are broader than a single technical milestone. They involve coordination, energy, safety, and the ability for people to use a system without becoming specialists in everything happening behind the scenes. A successful prototype is valuable, but dependable behavior over time is what makes a tool useful.

## From impressive to dependable

The path forward is not only about making machines recognize more. It is about helping them act in ways that remain understandable and consistent as conditions change. That requires attention to the complete experience, not just the most impressive moment.

When seeing and doing stay connected, robotics can move beyond isolated demonstrations and toward tasks people can rely on. That progress is measured in ordinary moments handled well.
    `.trim()
  },
  {
    slug: "physical-ai-models-to-machines",
    title: "Physical AI Is Moving from Models to Machines",
    date: "2026-09-05",
    category: "Physical AI",
    author: "NeuBlox Insights",
    excerpt: "AI is beginning to move beyond digital workflows into systems that perceive, decide, and act in the physical world.",
    content: `
## The Shift from Digital to Physical

For the past decade, the focus of artificial intelligence has been almost entirely digital. We have built models that excel at processing text, generating images, and automating software workflows. These foundation models have fundamentally changed how we interact with information.

However, the real world does not operate on structured data streams and predictable APIs. It is messy, dynamic, and bound by the laws of physics. The next wave of AI—Physical AI—will not live only in the cloud. It will move into machines that perceive, reason, adapt, and act in real-time physical environments.

### Embodied Systems Over APIs

When an LLM takes a few seconds to generate a response, the user waits. When a robotic system takes a few seconds to decide how to navigate around an unexpected obstacle, the system fails. 

Transitioning from models to machines requires a fundamental rethinking of how intelligence is deployed. We are no longer just dealing with computational complexity; we are dealing with spatial awareness, sensor fusion, and real-time decision loops.

### The Missing Infrastructure

The current AI infrastructure stack was built for the digital era. It assumes high-bandwidth connections, centralized compute clusters, and asynchronous processing. Physical AI requires a different paradigm. We need infrastructure that supports responsive, low-latency intelligence at the edge, while still leveraging the reasoning capabilities of large foundation models.

This is the challenge we are taking on. Building the infrastructure layer required to make the transition to intelligent machines practical, scalable, and real-time.
    `.trim()
  },
  {
    slug: "real-time-intelligence-robotics",
    title: "Why Real-Time Intelligence Matters for Robotics",
    date: "2026-08-19",
    category: "Robotics",
    author: "NeuBlox Insights",
    excerpt: "Physical-world AI requires responsiveness, efficiency, and reliability that are different from traditional cloud AI workloads.",
    content: `
## The Latency Constraint in Robotics

In traditional cloud AI workloads, throughput is king. We optimize for processing massive batches of data as efficiently as possible. But in robotics and physical AI, latency is the ultimate constraint. A system that cannot respond to its environment within strict time bounds is not just inefficient—it is unsafe.

### Edge vs. Cloud Tradeoffs

The debate between edge compute and cloud compute often treats them as mutually exclusive options. The reality for intelligent machines is much more nuanced.

*   **The Cloud:** Offers virtually unbounded compute for complex reasoning, simulation, and model updating.
*   **The Edge:** Provides the deterministic, low-latency processing necessary for sensor fusion, motor control, and immediate safety responses.

The challenge lies in orchestrating across this continuum. How do you split a complex inference task so that the critical components execute at the edge in under 10 milliseconds, while the strategic reasoning leverages the cloud?

### Demands of Real-Time Intelligence

Real-time intelligence demands a software stack that can guarantee execution bounds. It requires novel approaches to model quantization, compilation, and deployment. We must move away from non-deterministic garbage-collected runtimes in the critical path and toward systems designed for strict timing guarantees.

As foundation models become more capable, the bottleneck shifts from the model's reasoning ability to our capacity to deploy that reasoning within the strict physical constraints of a robot. Solving this requires deep systems engineering, not just better algorithms.
    `.trim()
  },
  {
    slug: "infrastructure-stack-intelligent-machines",
    title: "The Emerging Infrastructure Stack for Intelligent Machines",
    date: "2026-08-01",
    category: "AI Infrastructure",
    author: "NeuBlox Insights",
    excerpt: "Robotics, simulation, edge compute, and foundation models are converging into a new infrastructure category.",
    content: `
## A Convergence of Technologies

We are witnessing the simultaneous maturation of several critical technologies: foundation models, advanced simulation environments, edge compute hardware, and robotic actuation. Historically, these have existed in silos, each with its own ecosystem of tools, standards, and specialized engineers.

The next leap forward requires their convergence. This convergence is giving rise to an entirely new category: the infrastructure stack for intelligent machines.

### Breaking Down the Silos

Today, a team building an autonomous system must stitch together disparate solutions. They need a pipeline for training models, a completely different pipeline for running physical simulations, and yet another complex toolchain for deploying to embedded hardware. The friction in this process is immense.

*   **Simulation as the New Data Center:** Simulation is no longer just for validation; it is the primary environment for training and continuous learning.
*   **Seamless Deployment:** The transition from a model running in a high-fidelity simulation to one running on a physical robot must become seamless.

### What This Means for the Industry

The emergence of a unified infrastructure stack will dramatically lower the barrier to entry for building physical AI. Just as cloud computing abstracted away the complexities of managing physical servers, this new stack will abstract away the low-level complexities of sensor integration, real-time deployment, and distributed inference.

This will accelerate the deployment of intelligent machines across industries, moving us from highly specialized, bespoke robotic deployments to generalized, adaptable physical AI.
    `.trim()
  }
];
