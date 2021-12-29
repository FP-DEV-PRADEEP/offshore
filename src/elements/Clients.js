function Client() {
    var clientslist = [
        { id:1, imageurl: "../img/redress-blue.webp" },
        { id:2, imageurl: "../img/permoxx-blue.webp" },
        { id:3, imageurl: "../img/jackofall-blue.webp" },
        { id:4, imageurl: "../img/candiesclosetco-blue.webp" },
        { id:5, imageurl: "../img/acmasoft-blue.webp" },
        { id:6, imageurl: "../img/acmainstitute-blue.webp" }
    ];

    return <>
        {clientslist.map(client => (
            <li key={client.id} ><img src={client.imageurl} /></li>
        ))}
    </>
}
export default Client;
 