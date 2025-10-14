# 🎭 BMAD 工作流程與角色指南（中文）

BMAD-METHOD（Breakthrough Method of Agile AI-driven Development）是一套結合 AI 代理與敏捷開發的系統。  
每個角色對應一個專業 AI 代理（Agent），共同完成從策略規劃到產品開發的全流程。

---

## 👥 八大核心角色與主要產出

### 1️⃣ 📊 商業分析師（Analyst / Mary）
**角色定位**：策略思考夥伴，負責市場研究、使用者需求分析、競品比較與專案簡報。  
**主要產出**：
- 專案簡介（Project Brief）
- 市場研究報告（Market Research）
- 競爭分析（Competitor Analysis）

**使用時機**：專案初期、重新定位或市場探索階段。  
**指令範例**：`*agent analyst` → `*create-doc project-brief`

---

### 2️⃣ 📋 產品經理（PM / John）
**角色定位**：產品策略負責人，聚焦「做什麼」與「為什麼要做」。  
**主要產出**：
- 產品需求文件（PRD）
- 功能優先順序與 MVP 定義
- 路線圖（Roadmap）

**使用時機**：明確需求後，開始設計產品功能與版本規劃。  
**指令範例**：`*agent pm` → `*create-doc prd`

---

### 3️⃣ 🏗️ 系統架構師（Architect / Winston）
**角色定位**：技術總設計師，負責系統整體架構與技術棧決策。  
**主要產出**：
- 系統架構文件（Architecture Doc）
- 模組與 API 設計圖
- 資料流程與基礎建設規劃

**使用時機**：PRD 完成後，進入技術設計階段。  
**指令範例**：`*agent architect` → `*create-doc architecture`

---

### 4️⃣ 🎨 UX / UI 設計師（UX Expert / Sally）
**角色定位**：使用者體驗與介面設計專家。  
**主要產出**：
- 前端設計規格（Front-End Spec）
- Wireframe / Prototype
- AI 介面生成提示（AI UI Prompt）

**使用時機**：架構確定後，設計介面與互動流程階段。  
**指令範例**：`*agent ux-expert` → `*generate-ui-prompt`

---

### 5️⃣ 📝 產品負責人（PO / Sarah）
**角色定位**：敏捷流程守門人，確保需求具體可執行。  
**主要產出**：
- 使用者故事（User Stories）
- 驗收標準（Acceptance Criteria）
- Backlog 優先順序

**使用時機**：PRD 與架構文件完成後，開發前準備階段。  
**指令範例**：`*agent po` → `*create-story`

---

### 6️⃣ 🏃 Scrum Master（SM / Bob）
**角色定位**：開發流程教練與協調者。  
**主要產出**：
- 下一個開發故事（Next Story）
- 任務拆解與進度追蹤
- 敏捷檢查清單

**使用時機**：每次 Sprint 開始時。  
**指令範例**：`*agent sm` → `*create`

---

### 7️⃣ 💻 開發者（Dev / James）
**角色定位**：程式實作者，專注於實作、測試與驗證。  
**主要產出**：
- 程式碼與單元測試
- 開發日誌（Debug Log）
- Story 完成紀錄

**使用時機**：故事批准後進入正式開發階段。  
**指令範例**：`*agent dev` → `*run-tests`

---

### 8️⃣ 🧪 品質保證 / 資深審查者（QA / Quinn）
**角色定位**：品質守護者，進行程式碼審查與測試策略設計。  
**主要產出**：
- QA 審查報告
- 測試計畫與自動化建議
- 重構與品質改善紀錄

**使用時機**：開發完成後，進入審查與驗證階段。  
**指令範例**：`*agent qa` → `*review-story`

---

## 🧩 完整開發流程範例

### 🔹 新專案（Greenfield Fullstack）
> 適用：從零開始開發新產品

1️⃣ Analyst → 市場與需求分析  
2️⃣ PM → 建立 PRD（定義願景與功能）  
3️⃣ Architect → 系統架構與技術方案  
4️⃣ UX Expert → 設計 UX / UI  
5️⃣ PO → 拆解 User Stories  
6️⃣ SM → 產生下一個故事並進入 Sprint  
7️⃣ Dev → 開發與測試故事  
8️⃣ QA → 程式碼與品質驗證  
9️⃣ 重複步驟 6–8，直到所有故事完成  

---

### 🔹 既有系統優化（Brownfield Fullstack）
> 適用：為現有產品增加新功能或改善架構

1️⃣ Analyst → `*document-project` 分析現有系統  
2️⃣ PM → 建立 Brownfield PRD  
3️⃣ Architect → 規劃整合與升級方案  
4️⃣ PO → 拆解並撰寫新故事  
5️⃣ SM → 啟動開發循環  
6️⃣ Dev → 開發與測試  
7️⃣ QA → 品質審查  

---

### 🔹 前端專案（Greenfield UI）
> 適用：快速設計並生成 Web / App 前端

1️⃣ Analyst → 需求與使用者場景分析  
2️⃣ PM → PRD 定義介面功能  
3️⃣ UX Expert → 設計互動與介面  
4️⃣ Architect → 技術選型（React, Tailwind, API）  
5️⃣ Dev → 實作與測試前端  
6️⃣ QA → 驗證介面與功能  

---

### 🔹 後端服務專案（Greenfield Service）
> 適用：建立 API 或微服務

1️⃣ PM → 功能與 API 定義  
2️⃣ Architect → 系統與資料流設計  
3️⃣ Dev → 實作服務與單元測試  
4️⃣ QA → 效能與安全測試  

---

## 💡 實務建議

- 在 **Web 介面**（如 ChatGPT / Gemini）中進行文檔、研究與設計階段  
- 在 **IDE**（如 VS Code / Cursor）中進行開發與測試階段  
- 所有開發循環遵守以下節奏：
 
## 最佳實踐：
- 每個角色只在自己階段中出現，保持上下文乾淨  
- 所有文件遵循命名規範：`docs/prd.md`、`docs/architecture.md`  
- 開發階段故事（stories）需逐一完成後再啟新任務  