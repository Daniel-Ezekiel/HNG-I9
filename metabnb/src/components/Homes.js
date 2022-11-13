import AllHomes from "./AllHomes";

const Homes = () => {
    const homeImgs = ['card-img1', 'card-img2', 'card-img3', 'card-img4', 'card-img5', 'card-img6', 'card-img7', 'card-img8'];

    return (
        <section id="homes-section">
            <div>
                <h2>Inspiration for your next adventure</h2>

                <AllHomes homeImgs={homeImgs}/>
            </div>
        </section>
    )
}

export default Homes;