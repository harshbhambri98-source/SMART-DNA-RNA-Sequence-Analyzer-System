
function analyzeSequence(){

  const seq = document.getElementById("sequence").value.toUpperCase();

  let a=0,t=0,g=0,c=0,u=0;

  for(let ch of seq){
    if(ch==="A") a++;
    if(ch==="T") t++;
    if(ch==="G") g++;
    if(ch==="C") c++;
    if(ch==="U") u++;
  }

  document.getElementById("results").innerHTML = `
  <p>Adenine: ${a}</p>
  <p>Thymine: ${t}</p>
  <p>Guanine: ${g}</p>
  <p>Cytosine: ${c}</p>
  <p>Uracil: ${u}</p>
  `;

  drawChart(a,t,g,c,u);
}

let chart;

function drawChart(a,t,g,c,u){

  const ctx = document.getElementById("dnaChart");

  if(chart){
    chart.destroy();
  }

  chart = new Chart(ctx,{
    type:"pie",
    data:{
      labels:["A","T","G","C","U"],
      datasets:[{
        data:[a,t,g,c,u]
      }]
    }
  });
}
