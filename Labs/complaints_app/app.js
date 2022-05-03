fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json")
      .then((response) => response.json()) // This is a promise in readable stream
      .then((json) => {
        let info = json; // This is the data as an array
        console.log(info);

