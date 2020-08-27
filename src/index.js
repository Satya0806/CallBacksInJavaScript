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
console.log(getAsyncData(errorHandlerCallBack,resultHandler));
console.log('st 3');

function resultHandler(data){
  console.log('response', data);
}

function errorHandlerCallBack(error){

  console.log('Error from Async Function:',error.message);

}

function getSyncData(){

  return 'Sync Data';
}

function getAsyncData(errorHandlerCallBack,callback){

  const returnError = true;
  setTimeout(() => {
    if(returnError){
      errorHandlerCallBack( new Error('Error Occurred'))
    } else{
    callback('async data')
    }
  }, 3000);
}
