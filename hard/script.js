// hard ----------------------------

function createPatient() {
    let PII = {
      name: "John",
      ssn: "123-45-6789"
    };
  
    return {
      getName: function() {
        return PII.name;
      },
      getSSN: function() {
        return PII.ssn;
      }
    };
  }
  
  const patient2 = createPatient();
  
  console.log(patient2.names); 
  console.log(patient2.ssn);   
  console.log(patient2.getName());  
  console.log(patient2.getSSN());   


