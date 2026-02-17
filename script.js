window.__JOB_APP_LOADED = true;

const JOBS = [
	{
		id: 1,
		title: "Product Designer",
		company: "Lumen Labs",
		location: "New York, NY",
		salaryMin: 90000,
		salaryMax: 130000,
		type: "Full-time",
		level: "Mid",
		shortDescription: "Shape AI-powered workflows for a new generation of creators.",
		description:
			"Lead product design from discovery to delivery for a flagship collaboration suite. Partner with research, product, and engineering to deliver thoughtful user journeys and high-fidelity experiences.",
		skills: ["Figma", "Design systems", "UX research", "Prototyping"],
		responsibilities: [
			"Own the end-to-end design lifecycle for core features.",
			"Run design critiques and collaborate with cross-functional teams.",
			"Translate user insights into actionable design decisions."
		],
		postedDate: "2026-02-15",
		companyInfo:
			"Lumen Labs builds AI-first productivity tools for distributed teams.",
		logoColor: "#0ea5e9"
	},
	{
		id: 2,
		title: "Frontend Engineer",
		company: "Atlas Ventures",
		location: "Remote",
		salaryMin: 120000,
		salaryMax: 160000,
		type: "Remote",
		level: "Senior",
		shortDescription: "Build elegant interfaces for fintech analytics dashboards.",
		description:
			"Deliver fast, accessible frontends for our market intelligence platform. Work with product to define UI patterns and optimize performance across large datasets.",
		skills: ["JavaScript", "TypeScript", "CSS", "Accessibility"],
		responsibilities: [
			"Implement UI features with performance and accessibility in mind.",
			"Collaborate on design systems and component libraries.",
			"Mentor junior engineers and lead technical reviews."
		],
		postedDate: "2026-02-12",
		companyInfo:
			"Atlas Ventures helps investment teams move faster with real-time data.",
		logoColor: "#f97316"
	},
	{
		id: 3,
		title: "Data Analyst",
		company: "Northwind Health",
		location: "Austin, TX",
		salaryMin: 70000,
		salaryMax: 98000,
		type: "Full-time",
		level: "Entry",
		shortDescription: "Translate patient data into actionable insights.",
		description:
			"Analyze patient journeys to improve care outcomes. Build dashboards, maintain reporting pipelines, and provide insights to clinical teams.",
		skills: ["SQL", "Power BI", "Excel", "Healthcare analytics"],
		responsibilities: [
			"Develop weekly and monthly KPI dashboards.",
			"Collaborate with clinicians to interpret data trends.",
			"Ensure data integrity across reporting systems."
		],
		postedDate: "2026-02-10",
		companyInfo:
			"Northwind Health modernizes patient care experiences.",
		logoColor: "#22c55e"
	},
	{
		id: 4,
		title: "Marketing Strategist",
		company: "Brightside Media",
		location: "Chicago, IL",
		salaryMin: 80000,
		salaryMax: 110000,
		type: "Full-time",
		level: "Mid",
		shortDescription: "Run multi-channel campaigns for B2B SaaS clients.",
		description:
			"Develop growth strategies for enterprise clients. Own campaign planning, analytics, and cross-channel optimization.",
		skills: ["Demand gen", "SEO", "Lifecycle marketing", "Analytics"],
		responsibilities: [
			"Plan and launch quarterly growth initiatives.",
			"Manage performance reporting and dashboards.",
			"Coordinate with creative teams on campaign assets."
		],
		postedDate: "2026-02-08",
		companyInfo:
			"Brightside Media crafts growth strategy for SaaS brands.",
		logoColor: "#6366f1"
	},
	{
		id: 5,
		title: "DevOps Engineer",
		company: "Cloudsmith",
		location: "Seattle, WA",
		salaryMin: 130000,
		salaryMax: 175000,
		type: "Full-time",
		level: "Senior",
		shortDescription: "Scale cloud infrastructure for a high-growth platform.",
		description:
			"Own deployment pipelines, observability, and incident response. Build resilient infrastructure for multi-region services.",
		skills: ["AWS", "Terraform", "Kubernetes", "Observability"],
		responsibilities: [
			"Maintain CI/CD pipelines and deployment automation.",
			"Improve system reliability and monitoring.",
			"Partner with engineering on architecture planning."
		],
		postedDate: "2026-02-06",
		companyInfo:
			"Cloudsmith delivers scalable infrastructure for modern apps.",
		logoColor: "#38bdf8"
	},
	{
		id: 6,
		title: "Customer Success Manager",
		company: "HarborWorks",
		location: "Boston, MA",
		salaryMin: 65000,
		salaryMax: 90000,
		type: "Full-time",
		level: "Mid",
		shortDescription: "Drive onboarding and adoption for mid-market clients.",
		description:
			"Build onboarding plans, run quarterly business reviews, and expand adoption of our workflow platform.",
		skills: ["Account management", "Onboarding", "CRM", "SaaS"],
		responsibilities: [
			"Lead onboarding and adoption programs.",
			"Track success metrics and report outcomes.",
			"Identify upsell and expansion opportunities."
		],
		postedDate: "2026-02-05",
		companyInfo:
			"HarborWorks helps teams manage complex operations.",
		logoColor: "#14b8a6"
	},
	{
		id: 7,
		title: "Mobile App Developer",
		company: "PulseFit",
		location: "Remote",
		salaryMin: 110000,
		salaryMax: 145000,
		type: "Remote",
		level: "Mid",
		shortDescription: "Build a wellness app with millions of active users.",
		description:
			"Own new features across our iOS and Android apps using modern native tooling. Collaborate with product and design on upcoming launches.",
		skills: ["Swift", "Kotlin", "App architecture", "APIs"],
		responsibilities: [
			"Develop new mobile features and maintain quality.",
			"Improve app performance and stability.",
			"Collaborate with designers for pixel-perfect UI."
		],
		postedDate: "2026-02-03",
		companyInfo:
			"PulseFit connects users with personalized wellness programs.",
		logoColor: "#f43f5e"
	},
	{
		id: 8,
		title: "HR Business Partner",
		company: "Silverline",
		location: "Denver, CO",
		salaryMin: 85000,
		salaryMax: 115000,
		type: "Full-time",
		level: "Senior",
		shortDescription: "Coach leaders and scale people operations.",
		description:
			"Partner with functional leaders to drive performance and growth. Build programs for talent development and culture.",
		skills: ["Employee relations", "Coaching", "Talent development"],
		responsibilities: [
			"Advise leadership on people strategy.",
			"Own performance management cycles.",
			"Lead engagement initiatives."
		],
		postedDate: "2026-02-02",
		companyInfo:
			"Silverline builds modern logistics software.",
		logoColor: "#a855f7"
	},
	{
		id: 9,
		title: "AI Research Intern",
		company: "Neuralcraft",
		location: "San Francisco, CA",
		salaryMin: 40000,
		salaryMax: 60000,
		type: "Part-time",
		level: "Entry",
		shortDescription: "Prototype generative models for creative tooling.",
		description:
			"Support the research team by building prototypes, running experiments, and summarizing results for internal stakeholders.",
		skills: ["Python", "ML research", "PyTorch"],
		responsibilities: [
			"Assist with experiments and evaluations.",
			"Document findings and present insights.",
			"Support dataset preprocessing workflows."
		],
		postedDate: "2026-01-31",
		companyInfo:
			"Neuralcraft builds creative AI tooling for studios.",
		logoColor: "#0f172a"
	},
	{
		id: 10,
		title: "Operations Lead",
		company: "Relay Logistics",
		location: "Atlanta, GA",
		salaryMin: 95000,
		salaryMax: 125000,
		type: "Full-time",
		level: "Lead",
		shortDescription: "Improve fulfillment operations for a national network.",
		description:
			"Oversee daily operations, optimize delivery performance, and drive process improvements across multiple facilities.",
		skills: ["Operations", "Process improvement", "Leadership"],
		responsibilities: [
			"Manage KPIs and operational reporting.",
			"Lead cross-site improvement initiatives.",
			"Coach supervisors and frontline teams."
		],
		postedDate: "2026-01-30",
		companyInfo:
			"Relay Logistics powers fast, reliable delivery networks.",
		logoColor: "#84cc16"
	}
];

const safeStorage = {
	get(key) {
		try {
			return localStorage.getItem(key);
		} catch (error) {
			return null;
		}
	},
	set(key, value) {
		try {
			localStorage.setItem(key, value);
		} catch (error) {
			return;
		}
	}
};

class JobManager {
	constructor(jobs) {
		this.jobs = jobs;
	}

	getById(id) {
		return this.jobs.find((job) => job.id === id);
	}

	getLocations() {
		return [...new Set(this.jobs.map((job) => job.location))].sort();
	}

	filterJobs(filters) {
		const {
			search,
			location,
			type,
			level,
			salaryMin,
			salaryMax,
			sortBy
		} = filters;

		const normalized = search.trim().toLowerCase();
		const min = Number(salaryMin) || 0;
		const max = Number(salaryMax) || Number.POSITIVE_INFINITY;

		let results = this.jobs.filter((job) => {
			const matchesSearch =
				!normalized ||
				job.title.toLowerCase().includes(normalized) ||
				job.company.toLowerCase().includes(normalized) ||
				job.description.toLowerCase().includes(normalized) ||
				job.skills.some((skill) => skill.toLowerCase().includes(normalized));

			const matchesLocation = location === "all" || job.location === location;
			const matchesType = type === "all" || job.type === type;
			const matchesLevel = level === "all" || job.level === level;
			const salaryLow = job.salaryMin || 0;
			const salaryHigh = job.salaryMax || salaryLow;
			const matchesSalary = salaryHigh >= min && salaryLow <= max;

			return (
				matchesSearch &&
				matchesLocation &&
				matchesType &&
				matchesLevel &&
				matchesSalary
			);
		});

		if (sortBy === "salary") {
			results = results.sort(
				(a, b) => (b.salaryMax || b.salaryMin) - (a.salaryMax || a.salaryMin)
			);
		}

		if (sortBy === "latest") {
			results = results.sort(
				(a, b) => new Date(b.postedDate) - new Date(a.postedDate)
			);
		}

		if (sortBy === "relevance" && normalized) {
			results = results.sort(
				(a, b) => this.score(b, normalized) - this.score(a, normalized)
			);
		}

		return results;
	}

	score(job, term) {
		const titleScore = job.title.toLowerCase().includes(term) ? 3 : 0;
		const companyScore = job.company.toLowerCase().includes(term) ? 2 : 0;
		const skillScore = job.skills.some((skill) => skill.toLowerCase().includes(term))
			? 1
			: 0;
		return titleScore + companyScore + skillScore;
	}
}

class FilterManager {
	constructor() {
		this.state = {
			search: "",
			location: "all",
			type: "all",
			level: "all",
			salaryMin: "",
			salaryMax: "",
			sortBy: "latest"
		};
	}

	update(key, value) {
		this.state[key] = value;
	}

	reset() {
		this.state = {
			search: "",
			location: "all",
			type: "all",
			level: "all",
			salaryMin: "",
			salaryMax: "",
			sortBy: "latest"
		};
	}
}

class SavedJobsManager {
	constructor(storageKey = "savedJobs") {
		this.storageKey = storageKey;
	}

	getSavedIds() {
		const data = safeStorage.get(this.storageKey);
		if (!data) return [];
		try {
			const parsed = JSON.parse(data);
			return Array.isArray(parsed) ? parsed : [];
		} catch (error) {
			return [];
		}
	}

	saveIds(ids) {
		safeStorage.set(this.storageKey, JSON.stringify(ids));
	}

	toggle(id) {
		const ids = this.getSavedIds();
		const exists = ids.includes(id);
		const updated = exists ? ids.filter((jobId) => jobId !== id) : [...ids, id];
		this.saveIds(updated);
		return !exists;
	}

	isSaved(id) {
		return this.getSavedIds().includes(id);
	}

	getSavedJobs(allJobs) {
		const ids = this.getSavedIds();
		return allJobs.filter((job) => ids.includes(job.id));
	}
}

class UIController {
	constructor(jobManager, filterManager, savedManager) {
		this.jobManager = jobManager;
		this.filterManager = filterManager;
		this.savedManager = savedManager;
		this.jobsGrid = document.getElementById("jobsGrid");
		this.jobCount = document.getElementById("jobCount");
		this.totalCount = document.getElementById("totalCount");
		this.savedCount = document.getElementById("savedCount");
		this.emptyState = document.getElementById("emptyState");
		this.searchInput = document.getElementById("searchInput");
		this.sortSelect = document.getElementById("sortSelect");
		this.locationFilter = document.getElementById("locationFilter");
		this.typeFilter = document.getElementById("typeFilter");
		this.levelFilter = document.getElementById("levelFilter");
		this.salaryMin = document.getElementById("salaryMin");
		this.salaryMax = document.getElementById("salaryMax");
		this.clearFiltersBtn = document.getElementById("clearFilters");
		this.scrollTopBtn = document.getElementById("scrollTop");
	}

	init() {
		this.populateLocations();
		this.bindEvents();
		this.renderJobs();
		this.updateCounts();
		this.updateScrollButton();
	}

	populateLocations() {
		const locations = this.jobManager.getLocations();
		locations.forEach((location) => {
			const option = document.createElement("option");
			option.value = location;
			option.textContent = location;
			this.locationFilter.appendChild(option);
		});
	}

	bindEvents() {
		const handleSearch = this.debounce((event) => {
			this.filterManager.update("search", event.target.value);
			this.renderJobs();
		}, 300);

		this.searchInput.addEventListener("input", handleSearch);
		this.sortSelect.addEventListener("change", (event) => {
			this.filterManager.update("sortBy", event.target.value);
			this.renderJobs();
		});

		[this.locationFilter, this.typeFilter, this.levelFilter].forEach((select) => {
			select.addEventListener("change", (event) => {
				this.filterManager.update(
					event.target.id.replace("Filter", ""),
					event.target.value
				);
				this.renderJobs();
			});
		});

		[this.salaryMin, this.salaryMax].forEach((input) => {
			input.addEventListener("input", (event) => {
				this.filterManager.update(event.target.id, event.target.value);
				this.renderJobs();
			});
		});

		this.clearFiltersBtn.addEventListener("click", () => {
			this.filterManager.reset();
			this.searchInput.value = "";
			this.locationFilter.value = "all";
			this.typeFilter.value = "all";
			this.levelFilter.value = "all";
			this.salaryMin.value = "";
			this.salaryMax.value = "";
			this.sortSelect.value = "latest";
			this.renderJobs();
		});

		this.jobsGrid.addEventListener("click", (event) => {
			const card = event.target.closest(".job-card");
			if (!card) return;
			const jobId = Number(card.dataset.id);

			if (event.target.closest(".save-btn")) {
				const saved = this.savedManager.toggle(jobId);
				this.updateSaveButtons(jobId, saved);
				this.updateCounts();
			}
		});

		window.addEventListener("scroll", () => this.updateScrollButton());
		if (this.scrollTopBtn) {
			this.scrollTopBtn.addEventListener("click", () =>
				window.scrollTo({ top: 0, behavior: "smooth" })
			);
		}
	}

	renderJobs() {
		const jobs = this.jobManager.filterJobs(this.filterManager.state);
		this.jobsGrid.innerHTML = jobs.map((job) => this.jobCard(job)).join("");
		if (this.jobCount) {
			this.jobCount.textContent = `${jobs.length} jobs`;
		}
		if (this.totalCount) {
			this.totalCount.textContent = this.jobManager.jobs.length;
		}
		if (this.emptyState) {
			this.emptyState.classList.toggle("hidden", jobs.length > 0);
		}
	}

	jobCard(job) {
		const saved = this.savedManager.isSaved(job.id);
		return `
			<article class="job-card" data-id="${job.id}">
				<div class="card-head">
					${this.logoBadge(job)}
					<div>
						<h3 class="job-title">${job.title}</h3>
						<div class="job-meta">
							<span>${job.company}</span>
							<span>-</span>
							<span>${job.location}</span>
						</div>
					</div>
				</div>
				<div class="job-meta">
					<span class="chip">${job.type}</span>
					<span class="chip">${job.level}</span>
					<span>${this.formatSalary(job)}</span>
					<span>Posted ${this.formatDate(job.postedDate)}</span>
				</div>
				<p class="job-desc">${job.shortDescription}</p>
				<div class="card-actions">
					<a class="primary-btn" href="job.html?id=${job.id}">View Details</a>
					<button class="secondary-btn save-btn ${saved ? "saved" : ""}" type="button">
						${saved ? "Saved" : "Save Job"}
					</button>
				</div>
			</article>
		`;
	}

	logoBadge(job) {
		const initial = job.company.charAt(0).toUpperCase();
		return `<div class="logo-badge" style="background:${job.logoColor}">${initial}</div>`;
	}

	formatSalary(job) {
		if (!job.salaryMin) return "Salary not listed";
		return `$${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`;
	}

	formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric"
		});
	}

	updateSaveButtons(jobId, saved) {
		const buttons = document.querySelectorAll(`[data-id="${jobId}"] .save-btn`);
		buttons.forEach((btn) => {
			btn.classList.toggle("saved", saved);
			btn.textContent = saved ? "Saved" : "Save Job";
		});
	}

	updateCounts() {
		if (this.savedCount) {
			this.savedCount.textContent = this.savedManager.getSavedIds().length;
		}
	}

	updateScrollButton() {
		if (!this.scrollTopBtn) return;
		const show = window.scrollY > 400;
		this.scrollTopBtn.classList.toggle("show", show);
	}

	debounce(callback, delay) {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => callback(...args), delay);
		};
	}
}

class SavedPageController {
	constructor(jobManager, savedManager) {
		this.jobManager = jobManager;
		this.savedManager = savedManager;
		this.savedList = document.getElementById("savedList");
		this.savedCount = document.getElementById("savedTotal");
		this.emptySaved = document.getElementById("savedEmpty");
	}

	init() {
		this.renderSaved();
		if (this.savedList) {
			this.savedList.addEventListener("click", (event) => {
				if (event.target.closest(".remove-btn")) {
					const id = Number(event.target.closest(".saved-card").dataset.id);
					this.savedManager.toggle(id);
					this.renderSaved();
				}
			});
		}
	}

	renderSaved() {
		const savedJobs = this.savedManager.getSavedJobs(this.jobManager.jobs);
		if (this.savedCount) {
			this.savedCount.textContent = savedJobs.length;
		}
		if (this.savedList) {
			this.savedList.innerHTML = savedJobs
				.map(
					(job) => `
			<div class="saved-card" data-id="${job.id}">
				<div>
					<h4>${job.title}</h4>
					<p>${job.company} - ${job.location}</p>
				</div>
				<div class="details-actions">
					<a class="secondary-btn" href="job.html?id=${job.id}">View</a>
					<button class="secondary-btn remove-btn" type="button">Remove</button>
				</div>
			</div>
		`
				)
				.join("");
		}
		if (this.emptySaved) {
			this.emptySaved.classList.toggle("hidden", savedJobs.length > 0);
		}
	}
}

class JobDetailsController {
	constructor(jobManager, savedManager) {
		this.jobManager = jobManager;
		this.savedManager = savedManager;
		this.detailsRoot = document.getElementById("detailsRoot");
	}

	init() {
		if (!this.detailsRoot) return;
		const params = new URLSearchParams(window.location.search);
		const id = Number(params.get("id"));
		const job = this.jobManager.getById(id);
		if (!job) {
			this.detailsRoot.innerHTML = `
				<div class="details-card">
					<h2>Job not found</h2>
					<p>The job you are looking for is no longer available.</p>
					<a class="primary-btn" href="index.html">Back to jobs</a>
				</div>
			`;
			return;
		}
		this.render(job);
	}

	render(job) {
		const saved = this.savedManager.isSaved(job.id);
		this.detailsRoot.innerHTML = `
			<div class="details-card">
				<div class="card-head">
					<div class="logo-badge" style="background:${job.logoColor}">${job.company.charAt(0)}</div>
					<div>
						<h2 class="job-title">${job.title}</h2>
						<div class="job-meta">
							<span>${job.company}</span>
							<span>-</span>
							<span>${job.location}</span>
						</div>
					</div>
				</div>
				<div class="job-meta">
					<span class="chip">${job.type}</span>
					<span class="chip">${job.level}</span>
					<span>${this.formatSalary(job)}</span>
					<span>Posted ${this.formatDate(job.postedDate)}</span>
				</div>
				<p>${job.description}</p>
				<div class="modal-section">
					<h4>Required skills</h4>
					<div class="job-meta">${job.skills.map((skill) => `<span class="chip">${skill}</span>`).join("")}</div>
				</div>
				<div class="modal-section">
					<h4>Responsibilities</h4>
					<ul class="list-grid">
						${job.responsibilities.map((item) => `<li>${item}</li>`).join("")}
					</ul>
				</div>
				<div class="modal-section">
					<h4>Company info</h4>
					<p>${job.companyInfo}</p>
				</div>
				<div class="details-actions">
					<button class="primary-btn" type="button">Apply Now</button>
					<button class="secondary-btn save-btn ${saved ? "saved" : ""}" type="button">
						${saved ? "Saved" : "Save Job"}
					</button>
					<a class="secondary-btn" href="index.html">Back to listings</a>
				</div>
			</div>
		`;
		const saveBtn = this.detailsRoot.querySelector(".save-btn");
		if (saveBtn) {
			saveBtn.addEventListener("click", () => {
				this.savedManager.toggle(job.id);
				this.render(job);
			});
		}
	}

	formatSalary(job) {
		if (!job.salaryMin) return "Salary not listed";
		return `$${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`;
	}

	formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric"
		});
	}
}

const initTheme = () => {
	const toggle = document.getElementById("themeToggle");
	if (!toggle) return;
	const stored = safeStorage.get("theme");
	if (stored) {
		document.body.setAttribute("data-theme", stored);
	}
	toggle.addEventListener("click", () => {
		const current = document.body.getAttribute("data-theme") || "light";
		const next = current === "dark" ? "light" : "dark";
		document.body.setAttribute("data-theme", next);
		safeStorage.set("theme", next);
	});
};

const initApp = () => {
	const page = document.body.dataset.page;
	const jobManager = new JobManager(JOBS);
	const savedManager = new SavedJobsManager();

	initTheme();

	if (page === "list") {
		const filterManager = new FilterManager();
		const ui = new UIController(jobManager, filterManager, savedManager);
		ui.init();
	}

	if (page === "saved") {
		const savedPage = new SavedPageController(jobManager, savedManager);
		savedPage.init();
	}

	if (page === "details") {
		const detailPage = new JobDetailsController(jobManager, savedManager);
		detailPage.init();
	}
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initApp);
} else {
	initApp();
}
