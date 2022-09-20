import http from "../http-common";

const create = (data) =>{
  console.log("inviando")
  console.log(data);
  return http.post("tutorial",data);

}

const geAll = ()=>{
  return http.get("tutorial")
}

const findByTitle = (title)=>{
  console.log(title);
  return http.get(`tutorial?query=${title}`)
}

const updateTutorial= (id,data)=>{
  console.log(data)
  return http.put(`tutorial/${id}`,data)
}

const deleteTutorial = (id)=>{
  return http.delete(`tutorial/${id}`)
}

const TutorialService = {
    create,
    geAll,
    findByTitle,
    updateTutorial,
    deleteTutorial
}

export default TutorialService;