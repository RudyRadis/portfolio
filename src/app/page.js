import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "./components/Title";
import { Grid } from "./components/Grid";

export default function Home() {
      return (
            <>
                  <Title />
                  <Grid />
            </>
      );
}
