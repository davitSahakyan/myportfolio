import React from "react";
import {
    Card,
    CardTitle,
    CardActions,
    CardMenu,
    Button,
    IconButton,
    CardText
} from "react-mdl";

const ProjectItem = () => {
    return (
        <div
            className="project-items"
            style={{
                display: "flex",
                flexWrap: "wrap ",
                justifyContent: "space-between"
            }}
        >
            {/* Project1*/}
            <Card
                shadow={5}
                style={{ minWidth: "450", margin: "auto", padding: "10px" }}
            >
                <a
                    href="https://davitsahakyan.github.io/honey/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CardTitle
                        className="bg-image1"
                        style={{ color: "#fff", height: "176px" }}
                    >
                        {" "}
                        React Project #1
                    </CardTitle>{" "}
                </a>

                <CardText>
                    Էջը Ստեղծվել է Դավիթ Սահակյանի կողմից և նախատեսված է որպես
                    տեղեկատվական հարթակ ծառայելու բոլոր մեղր օգտագործողներին:
                </CardText>

                <CardActions border>
                    <Button colored>
                        {" "}
                        <a
                            href="https://github.com/davitSahakyan/honey"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            GitHub{" "}
                        </a>{" "}
                    </Button>
                    <Button colored> Codepen</Button>
                    <Button colored> LiveDemo</Button>
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            {/* Project2*/}
            <Card
                shadow={5}
                style={{ minWidth: "450", margin: "auto", padding: "10px" }}
            >
                <a
                    href="https://davitsahakyan.github.io/Crypto/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CardTitle
                        className="bg-image2"
                        style={{ color: "#fff", height: "176px" }}
                    >
                        {" "}
                        React Project #2
                    </CardTitle>{" "}
                </a>

                <CardText>
                    Էջը Ստեղծվել է Դավիթ Սահակյանի կողմից և կծանոթացնի
                    ինքնաբավարար թվային արժույթի տեսակներին ինչպիսին են Բիթքոինը
                    և այլն:
                </CardText>

                <CardActions border>
                    <Button colored>
                        {" "}
                        <a
                            href="https://github.com/davitSahakyan/Crypto"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </Button>
                    <Button colored> Codepen</Button>
                    <Button colored> LiveDemo</Button>
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </div>
    );
};

export default ProjectItem;