package org.acme.getting.started;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.*;
@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        processBuilder.command("bash","-c","npm i --prefix $HOME/Narada/getting-started/src/main/desktop/ && npm run dev --prefix $HOME/Narada/getting-started/src/main/desktop/");
        // ProcessBuilder p1 = new ProcessBuilder();
        // p1.command("bash","-c","yarn --cwd src/main/desktop/ run dev");


        // Process process = Runtime.getRuntime().exec("ls /home/abhik/");
        System.out.println("Over....");

        try {
            long start = System.currentTimeMillis();
            long end = start + 60*1000; // 60 seconds * 1000 ms/sec
            while (System.currentTimeMillis() < end)
            {
                // run
                Process process = processBuilder.start();
        
            StringBuilder output = new StringBuilder();
        
            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(process.getInputStream()));
        
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line + "\n");
                System.out.println(output);
                if(output.toString().equals("[1]     at WebContents.emit (events.js:228:7)" + "\n"))
                return "test over";
            }
        
            int exitVal = process.waitFor();
            if (exitVal == 0) {
                System.out.println("Success!");
                //Process p2 = p1.start();

                System.out.println(output);
                System.exit(0);
            } else {
                //abnormal...
            }
        
        }
     } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        
            
            return "hello";
            
    }
}