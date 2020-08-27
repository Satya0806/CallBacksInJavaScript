import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log(getSyncData());
console.log(getAsyncData(resultHandler));
console.log('st 3');

function resultHandler(data){
  console.log('response', data);
}

function getSyncData(){

  return 'Sync Data';
}

function getAsyncData(callback){
  setTimeout(() => {
    callback('async data')
  }, 3000);
}
