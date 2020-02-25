let data = [
    {
        "timestamp": "2020-02-19T07:32:51.192Z",
        "ironman": 8,
        "thor": 8,
        "captainAmerica": 6,
        "blackWidow": 10,
        "winterSoldier": 10,
        "scarletWitch": 9,
        "captainMarvel": 1
    },
    {
        "timestamp": "2020-02-19T07:38:46.505Z",
        "ironman": 7,
        "thor": 6,
        "captainAmerica": 7,
        "blackWidow": 6,
        "winterSoldier": 5,
        "scarletWitch": 8,
        "captainMarvel": 4
    },
    {
        "timestamp": "2020-02-19T08:01:39.665Z",
        "ironman": 7,
        "thor": 10,
        "captainAmerica": 6,
        "blackWidow": 9,
        "winterSoldier": 5,
        "scarletWitch": 7,
        "captainMarvel": 5
    },
    {
        "timestamp": "2020-02-19T08:23:25.503Z",
        "ironman": 10,
        "thor": 8,
        "captainAmerica": 8,
        "blackWidow": 9,
        "winterSoldier": 7,
        "scarletWitch": 8,
        "captainMarvel": 6
    },
    {
        "timestamp": "2020-02-19T09:05:49.396Z",
        "ironman": 10,
        "thor": 10,
        "captainAmerica": 10,
        "blackWidow": 10,
        "winterSoldier": 10,
        "scarletWitch": 10,
        "captainMarvel": 10
    },
    {
        "timestamp": "2020-02-19T13:04:42.548Z",
        "ironman": 8,
        "thor": 9,
        "captainAmerica": 8,
        "blackWidow": 8,
        "winterSoldier": 6,
        "scarletWitch": 5,
        "captainMarvel": 7
    },
    {
        "timestamp": "2020-02-19T14:41:31.020Z",
        "ironman": 9,
        "thor": 9,
        "captainAmerica": 10,
        "blackWidow": 4,
        "winterSoldier": 9,
        "scarletWitch": 5,
        "captainMarvel": 1
    },
    {
        "timestamp": "2020-02-19T16:06:23.888Z",
        "ironman": 9,
        "thor": 9,
        "captainAmerica": 9,
        "blackWidow": 8,
        "winterSoldier": 7,
        "scarletWitch": 10,
        "captainMarvel": 5
    },
    {
        "timestamp": "2020-02-20T08:48:26.245Z",
        "ironman": 2,
        "thor": 4,
        "captainAmerica": 10,
        "blackWidow": 8,
        "winterSoldier": 1,
        "scarletWitch": 9,
        "captainMarvel": 8
    },
    {
        "timestamp": "2020-02-20T08:53:39.058Z",
        "ironman": 10,
        "thor": 10,
        "captainAmerica": 2,
        "blackWidow": 2,
        "winterSoldier": 2,
        "scarletWitch": 5,
        "captainMarvel": 1
    },
    {
        "timestamp": "2020-02-22T08:14:34.019Z",
        "ironman": 9,
        "thor": 10,
        "captainAmerica": 8,
        "blackWidow": 9,
        "winterSoldier": 10,
        "scarletWitch": 10,
        "captainMarvel": 9
    }
]
function averageData(data){
  let newData = [];
  let keys = Object.keys(data[0]);
  for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    let sum = 0;
    let num = 0;
    for (let j = 0; j < data.length; j++){
      let datum = data[j];
      if (key in datum){
        sum += datum[key];
        num ++
      }
    }
    let avg = sum/num;
    if (!isNaN (avg)){
      let newDataPoint = {"name": key, "average": avg,'numMeasurements':num};
      newData.push(newDataPoint);
    }
  }
  return newData;
}

let transformedData = averageData(data);
console.log(transformedData);

for(let i = 0; i < transformedData.length; i++){
   // transformed data look like this:
   // [ object1  ,  object2  ,object3   , object4  ,   object5 ]
  let datapoint = transformedData[i];
  let hero = datapoint.name;
  let average = datapoint.average;
  let bar = document.createElement("div");
  bar.className = "bar";
  bar.style.width = (average * 100) + "px";

  // check in which loop we are using an if-statement
  if (i == 0){
    bar.style.backgroundImage =' url(https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-2-colored/100/Ironman_Mark_45-512.png)';
    bar.style.backgroundSize = '50px,250px';
    bar.style.backgrounsColor = 'yellow';
  }
  else if (i == 1) {
      bar.style.backgroundImage =' url(http://www.aigei.com/tool/image/visit/20200225-b1410a7c8b4f4d29965fb9686a8adfab.jpeg)';
      bar.style.backgroundSize = '50px,250px';
  }
  else if (i == 2) {
      bar.style.backgroundImage =' url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Captain_America%27s_shield.svg/240px-Captain_America%27s_shield.svg.png)';
      bar.style.backgroundSize = '50px,250px';
  }
  else if (i == 3) {
      bar.style.backgroundImage =' url(http://www.aigei.com/tool/image/visit/20200225-49eddc194457450f920f9ce7c8221c51.jpg)';
      bar.style.backgroundSize = '50px,250px';
  }
  else if (i == 4) {
      bar.style.backgroundImage =' url(http://www.aigei.com/tool/image/visit/20200225-ea4713132e114dbda0f955b5ed43a824.jpg)';
      bar.style.backgroundSize = '70px,250px';
  }
  else if (i == 5) {
      bar.style.backgroundImage =' url(http://www.aigei.com/tool/image/visit/20200225-87a13ea8608a43a9a07c326ea30fb988.jpeg)';
      bar.style.backgroundSize = '50px,250px';
  }
  else if (i == 6) {
      bar.style.backgroundImage =' url(https://www.pngkey.com/png/full/217-2178319_captain-marvel-symbol-png-picture-transparent-library-captain.png)';
      bar.style.backgroundSize = '50px,250px';
  }

  bar.style.backgroundColor = "transparent";

  let barname = document.createElement("p");
  //barname.innerHTML = hero;
  bar.appendChild(barname);
  document.body.appendChild(bar);
}
