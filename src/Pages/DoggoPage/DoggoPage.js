import "./DoggoPage.scss";

function DoggoPage() {
  return (
    <div className="doggoPage__container">
      <h1 className="doggoPage__container--title">Doggos</h1>
      <div className="doggoPage__container--content">
        <p className="doggoPage__container--content__text doggo__text">
          Doggos are on it's way!
        </p>
        <img
          className="doggoPage__container--content__pic doggo__pic"
          src="./icons/doggo.jpg"
          alt="cute doggo"
        />
      </div>
    </div>
  );
}

export default DoggoPage;
