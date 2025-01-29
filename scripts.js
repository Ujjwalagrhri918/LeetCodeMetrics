async function  fetchLeetCodeData() {

    const userName = document.getElementById('username').value;
    
    if(!userName){
      alert("Please Enter the Username");
      return;
    }
    try{
      const API_url = "https://leetcode-stats-api.herokuapp.com/";

      const response = await fetch(`${API_url}${userName}`);
      const data = await response.json();
      console.log(data);

      if(data.status == "success"){
          document.getElementById("total-solved").textContent = data.totalSolved;
          document.getElementById('acceptance-rate').textContent = `${data.acceptanceRate}%`;
          document.getElementById('easy-solved').textContent = data.easySolved;
          document.getElementById('medium-solved').textContent = data.mediumSolved;
          document.getElementById('hard-solved').textContent = data.hardSolved;
      }else{
          alert("User Not found");
      }
    }
    catch(error){
        console.log("Error while fetching the details: ", error);
        alert("Error occured");
    }

}