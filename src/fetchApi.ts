

const fetchApi = (auth: any) => {
    try {
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify(auth),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.code == 200) {
                    window.localStorage.setItem('token', data.token);
                    window.location.href = "/";
                }
                else if (data.code === 404) {
                    alert("Loi dang nhap");
                }
                else {
                    alert("Not found");
                }
                console.log(data);
            })
    } catch (error) {
        console.log(error)
    }
    // } finally {
    //     window.location.href = "/"
    // }

}
export default fetchApi;