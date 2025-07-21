// NavBar.js
export function renderNavBar(containerId) {
  const nav = document.createElement('nav');
  nav.className = 'navbar-modern';
  nav.innerHTML = `
    <div class="navbar-content">
      <div class="nav-item active">
        <div class="nav-icon-bg active">
          <i data-feather="search"></i>
        </div>
        <div class="nav-label">Find</div>
      </div>
      <div class="nav-item">
        <div class="nav-icon-bg">
          <i data-feather="map"></i>
        </div>
        <div class="nav-label">Trip</div>
      </div>
      <div class="nav-item">
        <div class="nav-icon-bg">
          <i data-feather="user"></i>
        </div>
        <div class="nav-label">Me</div>
      </div>
    </div>
  `;
  document.getElementById(containerId).appendChild(nav);
  if (window.feather) window.feather.replace();
} 