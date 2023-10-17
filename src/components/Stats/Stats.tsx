import {Badge, Progress} from "@chakra-ui/react";
import style from "./Stats.module.css";
import {Stat} from "../../types/Stat";

interface Props {
    stats?: Stat[]
}

export const Stats = ({stats}: Props) => {
    return <>{
        stats?.map(value => {
            return <div>
                <Badge colorScheme='green'>{value.stat.name}</Badge>
                <Progress className={style.progress} value={value.base_stat}
                          isAnimated={true}
                          hasStripe/>
            </div>
        })
    }

    </>

}