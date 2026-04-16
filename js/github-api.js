export async function getFolders(user,repo,root){

const res=await fetch(
`https://api.github.com/repos/${user}/${repo}/contents/${root}`
)

return await res.json()

}

export async function getFiles(url){

const res=await fetch(url)

return await res.json()

}
