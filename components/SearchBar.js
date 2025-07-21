// SearchBar.js
export function renderSearchBar(containerId, onSearch) {
  const searchDiv = document.createElement("div");
  searchDiv.className = "search-bar-modern";
  searchDiv.innerHTML = `
    <div class="searchbar-outer searchbar-vertical-fixed">
      <input type="text" class="searchbar-input" placeholder="What are you searching for today?" style="font-size:17px;font-weight:400;line-height:23px;text-align:left;display:flex;align-items:center;width:100%;border:none;outline:none;background:transparent;color:var(--Text-Default-Default,#1E1E1E);font-family:'Instrument Sans',Arial,sans-serif;" />
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
  `;
  document.getElementById(containerId).appendChild(searchDiv);
  if (window.feather) window.feather.replace();

  const input = searchDiv.querySelector(".searchbar-input");
  const sendBtn = searchDiv.querySelector(".send");

  sendBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value && typeof onSearch === "function") {
      onSearch(value);
    }
  });

  // Optional: allow Enter key to trigger search
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
}
