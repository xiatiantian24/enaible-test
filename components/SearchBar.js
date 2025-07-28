// SearchBar.js
export function renderSearchBar(containerId, onSearch) {
  const searchDiv = document.createElement("div");
  searchDiv.className = "search-bar-modern";
  searchDiv.innerHTML = `
    
    <div class="searchbar-outer searchbar-vertical-fixed">
      <textarea type="text" class="searchbar-input" placeholder="What are you searching for today?" style="font-size:17px;line-height:23px;text-align:left;display:flex;width:100%;height:100%;border:none;outline:none;background:transparent;color:var(--Text-Default-Default,#1E1E1E);font-family:'Instrument Sans',Arial,sans-serif;"></textarea>
      <div class="searchbar-actions-row-fixed">
        <button class="searchbar-action-btn" title="Voice Search">
          <i data-feather="mic"></i>
        </button>
        <button class="searchbar-action-btn" title="Camera Search">
          <i data-feather="camera"></i>
        </button>
        <button class="searchbar-action-btn send searchbar-arrow-btn" title="Send">
          <i data-feather="arrow-right"></i>
        </button>
      </div>
    </div>
       <div class="test-selection-container">
      <div class="test-selection-header">
        <span>Suggested Searches</span>
      </div>
      <div class="test-selection-buttons">
      <div class="test-selection-buttons-inner">
        <button class="test-btn" data-test="test1">
          <span class="test-btn-label">Summer running shoes for a 5k</span>
          <i class="fa-solid fa-square-arrow-up-right test-btn-arrow"></i>
        </button>
        <button class="test-btn" data-test="test2">
          <span class="test-btn-label">Casual tennis shoes</span>
          <i class="fa-solid fa-square-arrow-up-right test-btn-arrow"></i>
        </button>
        <button class="test-btn" data-test="test3">
          <span class="test-btn-label">Denim jorts with pockets</span>
          <i class="fa-solid fa-square-arrow-up-right test-btn-arrow"></i>
        </button>
        <button class="test-btn" data-test="test4">
          <span class="test-btn-label">Jeans for white/black t-shirt</span>
          <i class="fa-solid fa-square-arrow-up-right test-btn-arrow"></i>
        </button>
      </div>
      </div>
    </div>
  `;
  document.getElementById(containerId).appendChild(searchDiv);
  if (window.feather) window.feather.replace();

  const input = searchDiv.querySelector(".searchbar-input");
  const sendBtn = searchDiv.querySelector(".send");

  // Disable free typing in search bar
  input.setAttribute("readonly", "readonly");
  input.style.cursor = "default";
  input.style.userSelect = "none";

  // Test selection button handlers
  const testButtons = searchDiv.querySelectorAll(".test-btn");
  testButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const testId = btn.getAttribute("data-test");

      // Update active button state
      testButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Switch test configuration
      if (window.switchTestConfig) {
        window.switchTestConfig(testId);
      }

      // Update search button appearance when query is populated
      updateSearchButtonAppearance();
    });
  });

  // Function to update search button appearance
  function updateSearchButtonAppearance() {
    const hasQuery = input.value.trim().length > 0;
    if (hasQuery) {
      sendBtn.classList.add("active");
    } else {
      sendBtn.classList.remove("active");
    }
  }

  // Initial button state
  updateSearchButtonAppearance();

  sendBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value && typeof onSearch === "function") {
      onSearch(value);
    }
  });

  // Disable Enter key functionality since typing is disabled
  input.addEventListener("keydown", (e) => {
    e.preventDefault(); // Prevent any keyboard input
  });
}
