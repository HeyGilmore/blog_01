export default function gridLayout() {
  //----- Create the grid container
  const bodyDiv = document.createElement("div");
  bodyDiv.style.display = "grid";
  bodyDiv.style.gridTemplate = `
  "header header header header header header header" 112px
"main main main main main right right"
"main main main main main right right"
`;
  bodyDiv.style.height = "100vh"; // Full viewport height

  //------ Header
  const header = document.createElement("div");
  header.id = "headerSection";
  header.style.border = "3px solid green";
  header.style.backgroundColor = "green";
  header.style.gridArea = "header";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "center";

  //------ Creation of Header 1
  const headerH1 = document.createElement("h1");
  headerH1.textContent = "Laughing Through Life";
  headerH1.className = "main-header"; // Add a class if needed
  // adding H1 to header section
  header.appendChild(headerH1);
  // adding header section to DOM
  bodyDiv.appendChild(header);

  //----- Main content area
  const mainDiv = document.createElement("main");
  mainDiv.id = "mainSource";
  mainDiv.style.border = "5px solid red";
  mainDiv.style.backgroundColor = "red";
  mainDiv.style.gridArea = "main";
  bodyDiv.appendChild(mainDiv);

  //----- Aside section
  const aside = document.createElement("aside");
  aside.id = "asideSection";
  aside.style.border = "5px solid purple";
  aside.style.backgroundColor = "purple";
  aside.style.gridArea = "right";
  bodyDiv.appendChild(aside);

  //----- Append the grid container to the parent element
  const parentElement = document.getElementById("mainSection");
  parentElement.appendChild(bodyDiv);
}
