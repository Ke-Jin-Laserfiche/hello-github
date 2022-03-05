function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("      /'*._         _\n"+
        "  .-*'`    `*-.._.-'/\n"+
        "< @ ))     ,       ( \n"+
        "  `*-._`._(__.--*'`.\\");
      }, 2000);
    });
  }
  
export async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  