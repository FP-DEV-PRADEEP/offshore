function Client() {
    var clientslist = [
        { id:1, imageurl: "../img/redress-blue.webp", name:"redress" },
        { id:2, imageurl: "../img/permoxx-blue.webp", name:"permoxx"  },
        { id:3, imageurl: "../img/jackofall-blue.webp", name:"jackofall"  },
        { id:4, imageurl: "../img/candiesclosetco-blue.webp", name:"candiesclosetco"  },
        { id:5, imageurl: "../img/acmasoft-blue.webp", name:"acmasoft"  },
        { id:6, imageurl: "../img/acmainstitute-blue.webp", name:"acmainstitute"  }
    ];

    return <>
        {clientslist.map(client => (
            <li key={client.id} ><img alt={client.name} src={client.imageurl} /></li>
        ))}
    </>
}
export default Client;
 