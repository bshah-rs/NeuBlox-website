export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "physical-ai-models-to-machines",
    title: "Physical AI Is Moving from Models to Machines",
    date: "2025-05-12",
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
    date: "2025-04-28",
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
    date: "2025-04-10",
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
