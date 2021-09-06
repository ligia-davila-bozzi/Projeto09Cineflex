export default function Input() {
    const places = ["Digite seu nome...", "Digite seu CPF..."];
    return (
        <div className="">
            {places.map(place => <input type="text" class="box-data" placeholder={place} />)}
        </div>
    );
}
