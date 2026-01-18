
/* =========================
   LOGIN DATA (from Excel)
   ========================= */
const STUDENTS = [{"id": "hs1", "name": "Nguyễn Hồ Hoài Anh", "class": "10A1"}, {"id": "hs2", "name": "Phạm Ngọc Gia Bảo", "class": "10A1"}, {"id": "hs3", "name": "Đậu Huyền Khánh Băng", "class": "10A1"}, {"id": "hs4", "name": "Nguyễn Lê Hải Băng", "class": "10A1"}, {"id": "hs5", "name": "Nguyễn Khánh Chi", "class": "10A1"}, {"id": "hs6", "name": "Nguyễn Thị Quỳnh Chi", "class": "10A1"}, {"id": "hs7", "name": "Chu Mạnh Cường", "class": "10A1"}, {"id": "hs8", "name": "Trần Mạnh Cường", "class": "10A1"}, {"id": "hs9", "name": "Trần Mạnh Dũng", "class": "10A1"}, {"id": "hs10", "name": "Lê Châu Giang", "class": "10A1"}, {"id": "hs11", "name": "Lê Hương Giang", "class": "10A1"}, {"id": "hs12", "name": "Trần Châu Giang", "class": "10A1"}, {"id": "hs13", "name": "Lê Hoàng Hà", "class": "10A1"}, {"id": "hs14", "name": "Nguyễn Hồng Hải", "class": "10A1"}, {"id": "hs15", "name": "Nguyễn Anh Hào", "class": "10A1"}, {"id": "hs16", "name": "Nguyễn Khánh Hoàn", "class": "10A1"}, {"id": "hs17", "name": "Lê Đức Huy", "class": "10A1"}, {"id": "hs18", "name": "Phạm Khánh Huyền", "class": "10A1"}, {"id": "hs19", "name": "Phạm Khánh Hưng", "class": "10A1"}, {"id": "hs20", "name": "Nguyễn Đăng Khoa", "class": "10A1"}, {"id": "hs21", "name": "Đào Tuấn Kiệt", "class": "10A1"}, {"id": "hs22", "name": "Phạm Thành Lê", "class": "10A1"}, {"id": "hs23", "name": "Phạm Nguyễn Hà Linh", "class": "10A1"}, {"id": "hs24", "name": "Nguyễn Thế Mạnh", "class": "10A1"}, {"id": "hs25", "name": "Võ Thị Hoài Mơ", "class": "10A1"}, {"id": "hs26", "name": "Nguyễn Bảo Ngọc", "class": "10A1"}, {"id": "hs27", "name": "Nguyễn Khánh Nhàn", "class": "10A1"}, {"id": "hs28", "name": "Đường Hồng Nhật", "class": "10A1"}, {"id": "hs29", "name": "Nguyễn Minh Nhật", "class": "10A1"}, {"id": "hs30", "name": "Nguyễn Hồng Nhung", "class": "10A1"}, {"id": "hs31", "name": "Ngô Thị Gia Như", "class": "10A1"}, {"id": "hs32", "name": "Lê Hồng Phi", "class": "10A1"}, {"id": "hs33", "name": "Nguyễn Mai Phương", "class": "10A1"}, {"id": "hs34", "name": "Nguyễn Hoàng Quân", "class": "10A1"}, {"id": "hs35", "name": "Nguyễn Tuấn Tú", "class": "10A1"}, {"id": "hs36", "name": "Thái Lê Hoàng Tuấn", "class": "10A1"}, {"id": "hs37", "name": "Nguyễn Phạm Thục Uyên", "class": "10A1"}, {"id": "hs38", "name": "Tô Lâm Vũ", "class": "10A1"}, {"id": "hs39", "name": "Trịnh Tuấn Vũ", "class": "10A1"}, {"id": "hs40", "name": "Nguyễn Thị Yến Vy", "class": "10A1"}];

// ===== dynamic roster (teacher-managed) =====
function getStudentList(){
  try{
    const r = JSON.parse(localStorage.getItem("py10:roster")||"null");
    if(r && Array.isArray(r.students) && r.students.length){
      return r.students.map(s=>({id:String(s.id||"").trim(), name:s.name||"", class:s.class||s.cls||""})).filter(s=>s.id);
    }
  }catch(e){}
  return STUDENTS;
}

// ===== dynamic teachers (teacher-managed) =====
function getTeacherList(){
  try{
    const t = JSON.parse(localStorage.getItem(TEACHERS_KEY)||"null");
    if(Array.isArray(t) && t.length){
      return t.map(x=>({
        id: String(x.id||"").trim(),
        name: x.name || x.fullName || "",
        pw: String(x.pw||x.pass||x.password||"").trim()
      })).filter(x=>x.id);
    }
  }catch(e){}
  return TEACHERS;
}
const TEACHERS_KEY = "py10:teachers";
const TEACHERS = [{"id": "gv", "name": "Giáo viên Tin học"}];

const DEFAULT_PW = "123456";
const SESSION_KEY = "py10:session";


// Force logout via ?logout or #logout
try{const u=new URL(location.href); if(u.searchParams.has("logout")||location.hash==="#logout"){ localStorage.removeItem(SESSION_KEY); }}catch(e){}
function findStudent(id){
  id = String(id || "").trim();
  return getStudentList().find(s => s.id === id) || null;
}
function findTeacher(id){
  id = String(id || "").trim();
  const list = getTeacherList();
  return (list || []).find(t => String(t.id) === id) || null;
}


function setSession(sess){ localStorage.setItem(SESSION_KEY, JSON.stringify(sess)); }
function getSession(){
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if(!raw) return null;
    const s = JSON.parse(raw);
    if(!s || !s.role || !s.id) return null;

    if(s.role === "student") {
      const st = findStudent(s.id);
      if(!st) return null;
      return { role:"student", id: st.id, name: st.name || "", class: st.class || "10A1" };
    }
    if(s.role === "teacher") {
      const t = findTeacher(s.id);
      if(!t) return null;
      return { role:"teacher", id: t.id, name: t.name || "Giáo viên" };
    }
    return null;
  } catch {
    return null;
  }
}
function clearSession(){ localStorage.removeItem(SESSION_KEY); }

function showLogin(){
  try{ const b=document.getElementById("btnHelp"); if(b) b.style.display = "none"; }catch(e){}
  const lr = document.getElementById("loginRoot");
  const ar = document.getElementById("appRoot");
  if(lr) lr.style.display = "grid";
  if(ar) ar.style.display = "none";
  try{
    document.body.classList.remove("mode-student");
    document.body.classList.remove("mode-teacher");
  }catch(e){}
}
function showStudentApp(sess){
  try{ const b=document.getElementById("btnHelp"); if(b) b.style.display = "inline-flex"; }catch(e){}
  const lr = document.getElementById("loginRoot");
  const ar = document.getElementById("appRoot");
  if(lr) lr.style.display = "none";
  if(ar) ar.style.display = "block";
  const label = sess.name ? `${sess.name} • ${sess.id} • Lớp ${sess.class||""}` : `${sess.id}`;
  const uEl = document.getElementById("userName");
  if(uEl) uEl.textContent = label;
  window.__USER = sess;
  // đảm bảo iframe đúng trang HS
  const fr = document.getElementById("editorFrame");
  if(fr && !String(fr.getAttribute("src")||"").includes("editor_v2.html")){
    fr.setAttribute("src","editor_v2.html");
  }
  try{
    document.body.classList.remove("mode-teacher");
    document.body.classList.add("mode-student");
  }catch(e){}
}
function showTeacherApp(sess){
  try{ const b=document.getElementById("btnHelp"); if(b) b.style.display = "none"; }catch(e){}
  const lr = document.getElementById("loginRoot");
  const ar = document.getElementById("appRoot");
  if(lr) lr.style.display = "none";
  if(ar) ar.style.display = "block";
  const label = sess.name ? `${sess.name} • ${sess.id}` : `${sess.id}`;
  const uEl = document.getElementById("userName");
  if(uEl) uEl.textContent = label;
  window.__TEACHER = sess;
  // iframe đúng trang GV
  const fr = document.getElementById("editorFrame");
  if(fr && !String(fr.getAttribute("src")||"").includes("teacher_dashboard.html")){
    fr.setAttribute("src","teacher_dashboard.html");
  }
  try{
    document.body.classList.remove("mode-student");
    document.body.classList.add("mode-teacher");
  }catch(e){}
}

let loginRole = "student";
function setRole(role){
  loginRole = role;
  const tabS = document.getElementById("tabStudent");
  const tabT = document.getElementById("tabTeacher");
  const logo = document.getElementById("lgLogo");
  const title = document.getElementById("lgTitle");
  const sub = document.getElementById("lgSub");
  const lab = document.getElementById("lgUserLabel");
  const hint = document.getElementById("lgHintChip");

  document.getElementById("lgErr").style.display = "none";
  document.getElementById("lgUser").value = "";
  document.getElementById("lgPass").value = "";

  if(role === "student"){
    logo.textContent = "HS";
    title.textContent = "Đăng nhập học sinh";
    sub.innerHTML = 'Dùng <b>Mã học sinh</b> để đăng nhập • Mật khẩu mặc định: <b>123456</b>';
    lab.textContent = "Mã học sinh";
    hint.textContent = "Gợi ý: hs1, hs2, hs3…";
    tabS.classList.add("primary"); tabT.classList.remove("primary");
  } else {
    logo.textContent = "GV";
    title.textContent = "Đăng nhập giáo viên";
    sub.innerHTML = 'Tài khoản mặc định: <b>gv</b> • Mật khẩu: <b>123456</b>';
    lab.textContent = "Tài khoản giáo viên";
    hint.textContent = "Gợi ý: gv";
    tabT.classList.add("primary"); tabS.classList.remove("primary");
  }
}

function loginTry(){
  const u = document.getElementById("lgUser").value.trim();
  const p = document.getElementById("lgPass").value.trim();
  const err = document.getElementById("lgErr");
  err.style.display = "none";
  // Password policy:
  // - Student: default password
  // - Teacher: default password OR teacher-specific password (if set)

  if(loginRole === "student"){
    if(p !== DEFAULT_PW){ err.style.display="block"; return; }
    const st = findStudent(u);
    if(!st){ err.style.display="block"; return; }
    setSession({role:"student", id: st.id});
    location.reload();
    return;
  }
  if(loginRole === "teacher"){
    const t = findTeacher(u || "gv");
    if(!t){ err.style.display="block"; return; }
    const tpw = String(t.pw||t.pass||t.password||"").trim();
    const teacherPwOk = (p === DEFAULT_PW) || (!!tpw && p === tpw);
    if(!teacherPwOk){ err.style.display="block"; return; }
    setSession({role:"teacher", id: t.id});
    location.reload();
    return;
  }
}

(function initLoginGate(){
  const sess = getSession();
  if(!sess){
    showLogin();
    document.getElementById("lgBtn").onclick = loginTry;
    document.getElementById("tabStudent").onclick = ()=>setRole("student");
    document.getElementById("tabTeacher").onclick = ()=>setRole("teacher");
    setRole("student");
    document.getElementById("lgUser").addEventListener("keydown", (e)=>{ if(e.key==="Enter") loginTry(); });
    document.getElementById("lgPass").addEventListener("keydown", (e)=>{ if(e.key==="Enter") loginTry(); });
    return;
  }
  if(sess.role === "student") showStudentApp(sess);
  if(sess.role === "teacher") showTeacherApp(sess);
  // Logout
  try{
    const lo = document.getElementById("btnLogout");
    if(lo) lo.onclick = ()=>{ try{ clearSession(); }catch(e){}; location.reload(); };
  }catch(e){}
})();




/* ===========================
   MINI HOMEWORK WIDGET (HS)
   - Đọc py10:assignments do GV giao
   - Chỉ hiện khi HS đăng nhập
   - Click "Mở" => mở bài trong iframe editor_v2
   - Tự đánh dấu xong nếu PASS bài (progress_pass_v1)
   =========================== */
const HW_ASSIGN_KEY = "py10:assignments";
const HW_DONE_PREFIX = "py10:hwDone:";

function _loadJSON(key, fallback){
  try{ return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; }catch(e){ return fallback; }
}
function _saveJSON(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){}
}
function _getStudentById(id){
  try{ return findStudent(id); }catch(e){ return null; }
}
function _getProgressForStudent(studentId){
  // Prefer the pass-map key if present, but also support the main student
  // progress store (used by the editor) so checkmarks reflect PASS status.
  const sid = String(studentId).trim();

  // 1) Some builds store pass-map here:
  //    py10:<sid>:progress_pass_v1  => { passed: { lessonId: true|timestamp } }
  const key1 = `py10:${sid}:progress_pass_v1`;
  const p1 = _loadJSON(key1, null);
  if(p1 && typeof p1 === 'object' && p1.passed && typeof p1.passed === 'object') return p1;

  // 2) Current student app stores a broader progress object here:
  //    py10:progress:<sid> => { passed: { lessonId: true|timestamp }, ... }
  const key2 = `py10:progress:${sid}`;
  const p2 = _loadJSON(key2, null);
  if(p2 && typeof p2 === 'object' && p2.passed && typeof p2.passed === 'object') return p2;

  return { passed:{} };
}
function _assignmentMatches(a, st){
  if(!a || a.active === false) return false;
  const cls = String(st.class || st.cls || "").trim();
  const type = String(a.targetType || a.type || "all").toLowerCase();
  if(type === "all" || type === "everyone") return true;
  if(type === "class"){
    const v = String(a.targetValue || a.className || a.class || "").trim();
    return !!v && v === cls;
  }
  if(type === "student" || type === "students"){
    if(String(a.targetValue||"").trim() === String(st.id)) return true;
    const arr = a.targets || a.studentIds || a.students || [];
    if(Array.isArray(arr)) return arr.map(String).includes(String(st.id));
    return false;
  }
  if(Array.isArray(a.targets)){
    if(a.targets.map(String).includes(String(st.id))) return true;
    if(cls && a.targets.map(String).includes(String(cls))) return true;
  }
  return false;
}
function _openLessonInIframe(lessonId){
  try{
    const fr = document.getElementById("editorFrame");
    if(!fr || !fr.contentWindow) return;
    const doc = fr.contentWindow.document;
    const sel = doc.getElementById("problemSelect");
    if(!sel) return;
    sel.value = String(lessonId);
    sel.dispatchEvent(new Event("change", { bubbles:true }));
    // scroll top inside iframe (nice)
    try{ fr.contentWindow.scrollTo(0,0); }catch(e){}
  }catch(e){}
}
function _formatDue(iso){
  if(!iso) return "";
  try{
    const d = new Date(String(iso));
    if(isNaN(d.getTime())) return String(iso);
    const dd = String(d.getDate()).padStart(2,"0");
    const mm = String(d.getMonth()+1).padStart(2,"0");
    const yy = d.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }catch(e){ return String(iso); }
}
function renderHwMini(){
  const box = document.getElementById("hwMini");
  const body = document.getElementById("hwMiniBody");
  const list = document.getElementById("hwMiniList");
  const empty = document.getElementById("hwMiniEmpty");
  const toggle = document.getElementById("hwMiniToggle");
  if(!box || !body || !list || !empty || !toggle) return;

  const sess = getSession();
  if(!sess || sess.role !== "student"){
    box.style.display = "none";
    return;
  }
  const st = _getStudentById(sess.id);
  if(!st){
    box.style.display = "none";
    return;
  }

  const assigns = (_loadJSON(HW_ASSIGN_KEY, []) || []).filter(a=>a && a.active !== false);
  const mine = assigns.filter(a=>_assignmentMatches(a, st));
  const progress = _getProgressForStudent(st.id);
  const doneKey = HW_DONE_PREFIX + String(st.id);
  const done = _loadJSON(doneKey, { ids: [] }) || { ids: [] };
  const doneSet = new Set((done.ids||[]).map(String));

  const pending = mine
    .filter(a=>{
      const lid = String(a.lessonId||"").trim();
      const pass = !!(progress && progress.passed && lid && progress.passed[lid]);
      return !pass && !doneSet.has(String(a.id));
    })
    .sort((a,b)=> String(a.due||"9999").localeCompare(String(b.due||"9999")));

  // Header title with count
  const titleEl = box.querySelector(".hwMiniTitle");
  if(titleEl){
    const n = pending.length;
    titleEl.textContent = n ? `Bài tập về nhà (${n})` : "Bài tập về nhà";
  }

  // Collapse state
  const stateKey = "py10:hwMiniCollapsed";
  let collapsed = !!_loadJSON(stateKey, false);
  toggle.textContent = collapsed ? "▸" : "▾";
  body.style.display = collapsed ? "none" : "block";
  toggle.onclick = ()=>{
    collapsed = !collapsed;
    _saveJSON(stateKey, collapsed);
    toggle.textContent = collapsed ? "▸" : "▾";
    body.style.display = collapsed ? "none" : "block";
  };

  // Render items
  list.innerHTML = "";
  if(!pending.length){
    empty.style.display = "block";
  }else{
    empty.style.display = "none";
    const show = pending.slice(0,3);
    for(const a of show){
      const dueTxt = _formatDue(a.due);
      const el = document.createElement("div");
      el.className = "hwMiniItem";
      el.innerHTML = `
        <div class="hwMiniItemTop">
          <div class="hwMiniItemTitle">${String(a.title||("Bài "+a.lessonId)).replace(/</g,"&lt;")}</div>
        </div>
        <div class="hwMiniMeta">${dueTxt ? ("Hạn: "+dueTxt) : "Bài cần làm ngay"}</div>
        <div class="hwMiniBtns">
          <button class="hwMiniBtn hwMiniBtnOpen">Mở</button>
          <button class="hwMiniBtn hwMiniBtnDone" title="Đánh dấu đã làm">✓</button>
        </div>
      `;
      el.querySelector(".hwMiniBtnOpen").onclick = ()=>{
        _openLessonInIframe(a.lessonId);
      };
      el.querySelector(".hwMiniBtnDone").onclick = ()=>{
        doneSet.add(String(a.id));
        done.ids = Array.from(doneSet);
        _saveJSON(doneKey, done);
        renderHwMini();
      };
      list.appendChild(el);
    }
    if(pending.length > 3){
      const more = document.createElement("div");
      more.className = "muted";
      more.style.fontSize = "12px";
      more.style.marginTop = "6px";
      more.textContent = `Còn ${pending.length-3} bài nữa…`;
      list.appendChild(more);
    }
  }

  box.style.display = "block";
}

// Auto update
try{
  window.addEventListener("storage", (e)=>{
    if(e && (e.key === HW_ASSIGN_KEY || String(e.key||"").includes(":progress_pass_v1"))){
      setTimeout(renderHwMini, 80);
    }
  });
}catch(e){}
setInterval(()=>{ try{ renderHwMini(); }catch(e){} }, 1500);


/* ===========================
   HELP TICKETS (HS -> GV)
   =========================== */
const HELP_TICKETS_KEY = "py10:helpTickets";

function getHelpTickets(){
  try{ return JSON.parse(localStorage.getItem(HELP_TICKETS_KEY) || "[]"); }
  catch{ return []; }
}
function setHelpTickets(arr){
  try{ localStorage.setItem(HELP_TICKETS_KEY, JSON.stringify(arr)); } catch(e){}
}

function captureEditorSnapshot(){
  const fallback = {
    lessonId: "",
    lessonTitle: "",
    code: "",
    error: "",
    output: "",
    passFail: "",
    ts: Date.now(),
  };
  try{
    const iframe = document.getElementById("editorFrame");
    if(!iframe || !iframe.contentWindow) return fallback;
    const w = iframe.contentWindow;
    if(typeof w.__py10GetSnapshot === "function"){
      const snap = w.__py10GetSnapshot();
      return Object.assign({}, fallback, snap || {});
    }
    return fallback;
  } catch(e){
    return fallback;
  }
}

// Helper: snapshot an toàn (không bao giờ null) để nút Trợ giúp không bị "im lặng" nếu iframe chưa load xong.
function captureEditorSnapshotSafe(){
  const snap = captureEditorSnapshot();
  if(snap && typeof snap === 'object') return snap;
  return {
    lessonId: "",
    lessonTitle: "",
    code: "",
    lastError: "",
    lastOutput: "",
    passFail: "",
    ts: Date.now()
  };
}

function openHelpModal(){
  const sess = getSession();
  // chỉ HS mới gửi
  if(!sess || sess.role !== "student") return;

  const modal = document.getElementById("helpModal");
  const ta = document.getElementById("helpDesc");
  const note = document.getElementById("helpNote");
  const metaLesson = document.getElementById("helpMetaLesson");
  const metaErr = document.getElementById("helpMetaErr");

  const snap = captureEditorSnapshot() || {};
  const lessonText = (snap.lessonTitle || snap.lessonId) ? `${snap.lessonTitle || ""} ${snap.lessonId ? "(" + snap.lessonId + ")" : ""}`.trim() : "Chưa xác định";
  metaLesson.textContent = lessonText;
  metaErr.textContent = (snap.lastError && String(snap.lastError).trim()) ? String(snap.lastError).trim().slice(0, 240) : "Chưa có";

  ta.value = "";
  note.style.display = "none";
  note.textContent = "";

  modal.style.display = "block";
  setTimeout(()=>{ ta.focus(); }, 30);
}

function closeHelpModal(){
  const modal = document.getElementById("helpModal");
  if(modal) modal.style.display = "none";
}

function submitHelpTicket(){
  const sess = getSession();
  if(!sess || sess.role !== "student") return;

  const ta = document.getElementById("helpDesc");
  const note = document.getElementById("helpNote");
  const desc = (ta.value || "").trim();

  const snap = captureEditorSnapshot() || {};
  const now = Date.now();
  const id = "T" + now + "_" + Math.random().toString(16).slice(2,8).toUpperCase();

  const ticket = {
    id,
    status: "open",
    createdAt: now,
    updatedAt: now,
    studentId: sess.id,
    studentName: sess.name || "Học sinh",
    class: sess.class || "10A1",
    message: desc || "(Không mô tả)",
    lessonId: snap.lessonId || "",
    lessonTitle: snap.lessonTitle || "",
    code: snap.code || "",
    error: snap.lastError || "",
    statusText: snap.lastStatus || "",
    output: snap.lastOutput || "",
    page: location.pathname,
    ua: navigator.userAgent
  };

  const list = getHelpTickets();
  list.unshift(ticket);
  // giới hạn dung lượng
  while(list.length > 200) list.pop();
  setHelpTickets(list);

  note.style.display = "block";
  note.textContent = `Đã gửi yêu cầu trợ giúp (#${id}). Giáo viên có thể xem trong mục “Trợ giúp HS”.`;
  setTimeout(()=>{ closeHelpModal(); }, 900);
}

function bindHelpUI(){
  const btn = document.getElementById("btnHelp");
  if(btn && !btn.__bound){
    btn.__bound = true;
    btn.addEventListener("click", openHelpModal);
  }
  const close1 = document.getElementById("helpModalClose");
  const close2 = document.getElementById("helpModalX");
  const cancel = document.getElementById("helpCancel");
  const send = document.getElementById("helpSend");
  if(close1 && !close1.__bound){ close1.__bound=true; close1.addEventListener("click", closeHelpModal); }
  if(close2 && !close2.__bound){ close2.__bound=true; close2.addEventListener("click", closeHelpModal); }
  if(cancel && !cancel.__bound){ cancel.__bound=true; cancel.addEventListener("click", closeHelpModal); }
  if(send && !send.__bound){ send.__bound=true; send.addEventListener("click", submitHelpTicket); }
}

(function(){ 
  // chạy sau khi DOM có sẵn
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bindHelpUI);
  }else{
    bindHelpUI();
  }
})();

