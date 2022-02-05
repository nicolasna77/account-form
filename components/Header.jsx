import Link from "next/link";
import Button from "./Button";

const Header = (props) => {
  return (
    <div className=" w-full h-12 ">
      <div className="float-left align-baseline">
        <h1 className="text-3xl">{props.name}</h1>
      </div>
      <div className="flex justify-end">
        <Link href="/" passHref>
          <a>
            <Button type="button" variant="none">
              Dashbord
            </Button>
          </a>
        </Link>

        <Link href="/add-entry" passHref>
          <a>
            <Button type="button" variant="primary">
              Add Entry
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Header;
