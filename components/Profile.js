export function renderProfile() {
  return `
    <div class="profile-container">
      <!-- Profile Header -->
      <div class="profile-header">
        <div class="profile-avatar">
          <i data-feather="user"></i>
        </div>
        <div class="profile-info">
          <div class="profile-name">Sam L.</div>
          <div class="profile-joined">sam_l</div>
        </div>
      </div>

      <!-- Key Metrics Section -->
      <div class="profile-metrics">
        
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-content">
              <div class="metric-label">My Closet</div>
              <div class="metric-value">5</div>
            </div>
            <div class="metric-arrow">
              <i data-feather="chevron-right"></i>
            </div>
          </div>
          
          <div class="metric-card">
            <div class="metric-content">
              <div class="metric-label">Trip History</div>
              <div class="metric-value">3</div>
            </div>
            <div class="metric-arrow">
              <i data-feather="chevron-right"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Menu Options -->
      <div class="profile-menu">
        
        <div class="menu-item" data-action="account">
          <div class="menu-icon">
            <i data-feather="user"></i>
          </div>
          <div class="menu-label">Account</div>
          <div class="menu-arrow">
            <i data-feather="chevron-right"></i>
          </div>
        </div>
        
        <div class="menu-item" data-action="preferences">
          <div class="menu-icon">
            <i data-feather="settings"></i>
          </div>
          <div class="menu-label">Preferences</div>
          <div class="menu-arrow">
            <i data-feather="chevron-right"></i>
          </div>
        </div>
        
        <div class="menu-item" data-action="data-sharing">
          <div class="menu-icon">
            <i data-feather="shield"></i>
          </div>
          <div class="menu-label">Data sharing control</div>
          <div class="menu-arrow">
            <i data-feather="chevron-right"></i>
          </div>
        </div>
      </div>

     
    </div>
  `;
}

export function initializeProfile() {
  // Add click handlers for menu items
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function () {
      const action = this.getAttribute("data-action");
      handleProfileAction(action);
    });
  });

  // Add click handlers for metric cards
  document.querySelectorAll(".metric-card").forEach((card) => {
    card.addEventListener("click", function () {
      const label = this.querySelector(".metric-label").textContent;
      handleMetricClick(label);
    });
  });

  // Initialize Feather icons
  if (window.feather) {
    window.feather.replace();
  }
}

