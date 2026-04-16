const USER="codedbyjoaogabriel"
const REPO="repository"
const ROOT="slides"

async function init(){

const folders=await getFolders(USER,REPO,ROOT)

folders
.filter(f=>f.type==="dir")
.forEach(loadSubject)

}

async function loadSubject(folder){

const files=await getFiles(folder.url)

const grid=document.createElement("div")

grid.className="grid"

files
.filter(f=>f.name.endsWith(".pdf"))
.forEach(file=>{

const card=document.createElement("div")

card.className="card"

card.innerHTML=`

<div class="canvas">
<canvas id="${file.sha}"></canvas>
</div>

<div class="info">
${file.name}
</div>

`

card.onclick=()=>openViewer(file.download_url)

grid.appendChild(card)

})

document.getElementById("subjects")
.appendChild(grid)

}

init()
