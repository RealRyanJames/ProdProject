import fs from "fs";
import * as json from "../Config.json" with { type: "json" };
import * as child from "child_process";

import ProjectConfig from "../main.js";

export default function Data() {
  fs.readFile("Config.json", (err) => {
    if (err) {
      console.log(err);
    }

    while (json.default.Web === "true") {
      if (json.default.Language.startsWith("TypeScript")) {
        console.log("File Found");
        ProjectConfig.Create("main.ts", true);
      }
      if (json.default.Cli === "true") {
        console.log("File Found");
        ProjectConfig.Create("main.ts", true);
      } else if (json.default.Language.startsWith("GoLang")) {
        console.log("File Found");

        ProjectConfig.Create("main.go", true);

        child.exec("go mod init app", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
          }

          if (stderr) {
            console.error(`Command stderr: ${stderr}`);
          }

          console.log(`Create a Go Modile File: ${stdout.trim()}`);
        });
      } else if (json.default.Cli === "true") {
        console.log("File Found");
        ProjectConfig.Create("main.ts", true);
      } else if (json.default.Language.startsWith("Java")) {
        child.exec(
          "mvn archetype:generate -DgroupId=org.app.com.me -DartifactId=DemoProject -DpackageName=app-Dversion=1.0-SNAPSHOT -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false",
          (error, stdout, stderr) => {
            if (error) {
              console.error(`Error executing command: ${error.message}`);
              return;
            }

            if (stderr) {
              console.error(`Command stderr: ${stderr}`);
            }

            console.log(`Create a Go Modile File: ${stdout.trim()}`);
          },
        );
      }

      json.default.Web = "false";
    }
  });
}
