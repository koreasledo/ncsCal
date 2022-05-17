let jumSoo1 = document.querySelectorAll(".jumSoo1");
let jumSoo2 = document.querySelectorAll(".jumSoo2");
let jumSoo3 = document.querySelectorAll(".jumSoo3");

const jumSoo = [ jumSoo1, jumSoo2, jumSoo3 ];

let resultBtn1 = document.querySelector("#resultBtn1");
let resultBtn2 = document.querySelector("#resultBtn2");
let resultBtn3 = document.querySelector("#resultBtn3");
let resultBtn4 = document.querySelector("#resultBtn4");

let sumNum1 = document.querySelector("#sumNum1");
let sumNum2 = document.querySelector("#sumNum2");
let sumNum3 = document.querySelector("#sumNum3");
let sumNum4 = document.querySelector("#sumNum4");

const allSumNum = [ sumNum1, sumNum2, sumNum3 ];

let avgNum1 = document.querySelector("#avgNum1");
let avgNum2 = document.querySelector("#avgNum2");
let avgNum3 = document.querySelector("#avgNum3");
let avgNum4 = document.querySelector("#avgNum4");

const allAvgNum = [ avgNum1, avgNum2, avgNum3 ];

let avg = 0;

const totalSumNum = () => {
  let sumNumber = 0;

  jumSoo.forEach((v, i) => {
    jumSoo[i].forEach((v2, i2) => {
      sumNumber += Number(jumSoo[i][i2].value);
    });
  });
  
  sumNum4.innerHTML = sumNumber;
  return sumNumber;
}

const totalAvgNum = () => {
  let sum = totalSumNum();
  let subjectCount = 0;
  
  jumSoo.forEach((v,i) => {
    subjectCount += Number(jumSoo[i].length);
  })

  avg = Number(Math.floor(sum / subjectCount + "e+1") +"e-1");
  avgNum4.innerHTML = avg;
}

const calNum = ( num )=> {
  let sumNumber = 0;

  jumSoo[num].forEach((v1) => {
      sumNumber += Number(v1.value);
  });

  allSumNum[num].innerHTML = sumNumber;

  avg = Number(Math.round(sumNumber / jumSoo[num].length + "e+1") + "e-1");
  allAvgNum[num]. innerHTML = avg;
};

resultBtn1.addEventListener('click', ()=> calNum(0));
resultBtn2.addEventListener('click', ()=> calNum(1));
resultBtn3.addEventListener('click', ()=> calNum(2));
resultBtn4.addEventListener('click', ()=> {
  totalSumNum();
  totalAvgNum();
});
