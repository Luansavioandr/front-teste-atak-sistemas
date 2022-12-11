
    listaResultados = async() =>{
        let textoPesquisa = document.getElementById('search').value;
        let data = await fetch("https://localhost:7125/api/SearchApi?search=" + textoPesquisa).then(res=>res.json());
        //document.getElementById('MyTable').innerHTML = "";
        for(let i = 0; i <data.length; i++){

            var x=document.getElementById('MyTable').insertRow(1);
            var c1=x.insertCell(0);
            var c2=x.insertCell(1);
            c1.innerHTML= data[i].titulo;
            c2.innerHTML= "<a href='"+data[i].link+"' target='_blank'>"+data[i].link+"</a>";
        }
    }     

