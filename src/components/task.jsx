import CleanUp from "./cleanUp";
import FeedCat from "./feedCat";
import FeedDog from "./feedDog";
import Code from "./code";

export default function Task(props) {
    switch (props.id) {
        case 1:
            return <Code />;
        case 2:
            return <CleanUp />;
        case 3:
            return <FeedCat />;
        case 4:
            return <FeedDog />;
        default:
            return null;
    }
}
