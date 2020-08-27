import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;


getUserId().then(
      (userId) => {
        console.log(userId);
        getUserDetails(userId).then(

          (userDetails) =>{
            console.log(userDetails);
          },
          (rejectedReason) =>{
            console.log(rejectedReason)
          }

        );
      },
      (rejectReason) => {
        console.log(rejectReason)
      }
);

function getUserId(){

        const shouldReject = Math.round(Math.random());

        const randomUserIndex = Math.round(Math.random())

       return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if(shouldReject){

                    reject('Promise to return userId could not be fulfilled!!!')
                  }else{

                  resolve(randomUserIndex)
                  }
                }, 500);
      });

}

function getUserDetails(userId){

  const users = [

    {name: 'Satya', phone: 3099128750},
    {name: 'Sujatha', phone: 3095126215}

  ]
        const shouldReject = Math.round(Math.random);

       return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if(shouldReject){

                    reject('Promise to return UserDetails could not be fulfilled')
                  }else{

                  resolve(users[userId])
                  }
                }, 500);
      });

}



