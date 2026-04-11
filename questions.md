Template
---
id:  
question:   
answer:  
refs: []  
tags: []  
---

---
question: "How do I use Google Cloud?"  
answer: "GC console (i.e. the web interface), GC Shell (aka Cloud Shell) and gcloud CLI, REST API, and GC Mobile app."  
tags: [ "general" ]  
---

---
question: "What's the difference between Cloud Shell and gcloud CLI?"  
answer: "Cloud Shell refers to a shell environment (i.e. a temporary VM) accessible via your web browser that comes preinstalled with GC CLI and other utilities like a built-in code editor. gcloud CLI is a command-line tool that lets you do administrative GC stuff, either directly through the terminal or via executing gcloud CLI commands in scripts."  
refs: [ "https://docs.cloud.google.com/shell/docs", "https://docs.cloud.google.com/sdk/gcloud"]  
tags: [ "cloud-shell", "gcloud-cli", "def" ]  
---

---
question: "If Cloud Shell is a temporarily-provisioned environment, can any data/files persist between sessions?"
answer: "Yes, up to 5GB of free persistent disk storage is available via the $HOME directory. The directory is deleted if you don't access Cloud Shell for 120 days."  
refs: [ "https://docs.cloud.google.com/shell/docs/how-cloud-shell-works#persistent_disk_storage"]  
tags: [ "cloud-shell" ]  
---

---
id: "google-cloud-sdk-def"  
question: "What is the Google Cloud SDK?"  
answer: "A suite of libraries and tools for managing cloud resources (via gcloud CLI), integrate APIs with programs written in various programming languages using [Cloud Client Libraries]("#cloud-client-libs-def"), building/testing/deploying applications with frameworks and tools like Spring or Kubernetes, as well as [emulators](#emulator-def).  
refs: [ "https://docs.cloud.google.com/sdk" ]  
tags: [ "google-cloud-sdk", "cloud-client-libraries", "gcloud-cli", "emulator", "def" ]  
---

---
id: "cloud-client-libs-def"  
question: "What are Cloud Client Libraries?"  
answer: "Programming-language-specific libraries that give you a way of accessing google services from your application code."  
refs: [ "https://docs.cloud.google.com/apis/docs/cloud-client-libraries" ]
tags: [ "cloud-client-libraries", "def" ]
---


---
id: "emulator-def"
question: "What is an emulator?"   
answer: "'Local' installations of GC services that simulate the remotely-hosted ones. Helps save costs and iterate faster during development."
refs: [ "https://docs.cloud.google.com/sdk/docs/overview#emulators" ]  
tags: [ "emulator", "def" ]  
---

---
id: "firestore-def" 
question: "What is Cloud Firestore?"
answer: "A cloud-hosted NoSQL database that uses data synchronization to update data on client devices. Basically Firebase but GCP's version."  
refs: [ "https://firebase.google.com/docs/firestore" ]  
tags: [ "firestore", "emulator", "def", "service" ]  
---

---
id: "pubsub-use-cases" 
question: "What are some use cases for the Pub/Sub service?"
answer: "Forwarding user interation or server _events_ to Pub/Sub, so that a stream processing tool such as [Dataflow]("#dataflow-def") can deliver these events to databases, allow for real-time processing of events for multiple applications, distributing change events across database clones, distributing tasks to multiple workers for parallel processing, data streaming, refreshing distrbuted caches, load balancing tasks across multiple subscribers for reliability."  
refs: [ "https://docs.cloud.google.com/pubsub/docs/overview" ]  
tags: [ "pubsub", "emulator", "use-cases", "service" ]  
---

---
id: "datastore-use-cases" 
question: "What are some use cases for the Datastore service?"
answer: "In general, for applications that rely on highly available data at scale. Examples are product catalogs that provide real-time inventory and product details, user profiles enabling customized experiences based on past activity or preferences, or transactions based on ACID properties like transferring funds between bank accounts."    
refs: [ "https://docs.cloud.google.com/datastore/docs/concepts/overview#what_its_good_for" ]  
tags: [ "datastore", "emulator", "use-cases", "service" ]  
---

---
id: "dataflow-def" 
question: "What is Dataflow?"
answer: "A GC service that provides unified stream and batch data processing at scale. You can use it to create data pipelines that read from one or more sources, transform the data, then write the data to a destination (i.e. for ETL workflows). DF is a fully-managed service, so it allocates and de-provisions all the compute resources it needs (i.e. VMs) to complete the task."      
refs: [ "https://docs.cloud.google.com/dataflow/docs/overview" ]    
tags: [ "dataflow", "service" ]  
---  

---
id:  
question: "What are the four 'layers' of the resource hierarchy, starting from the root resource?"
answer: "Organization, folder, project, resource."
refs: [ "https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy" ]  
tags: [ "resource-hierarchy" ]  
---

---
id:  
question: "What are the benefits of having an organization resource?"
answer: "All project resources won't belong to the creator of the resource but to the organization, so they'll be retained even when the creator's user account is deleted. There's also easier oversight for all the resources that belong to an organization, preventing 'shadow projects' or 'rogue admins'. Project and folder resources inherit roles granted to the organization resource, making it possible to assign roles to all the resources in an organization at once."
refs: [ "https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy#benefits_of_the_organization_resource" ]  
tags: [ "organization-resource" ]  
---

---
id:  
question: "What two things can you sign up for to have an associated organization resource created automatically?" 
answer: "Google Workspace or Cloud Identity." 
refs: []  
tags: [ "organization-resource" ]  
---
