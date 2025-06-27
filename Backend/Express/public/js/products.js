const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    const formData = event.target.productName.value;
    // console.log(formData);  
    let obj = {
        productName: formData
    };

    axios.post('/products', obj).then((result) => {
        console.log(result.data);
    });    
};    
    

