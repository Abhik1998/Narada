import java.util.*;
public class a1{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int x=sc.nextInt();
            int y=sc.nextInt();
            int z=sc.nextInt();

            if(x==y && y==z)
            {
                System.out.println("YES");
                System.out.println(x+" "+y+" "+z);
                continue;
            }
            else 
            if(x==y && y>z){
                System.out.println("YES");
                System.out.println(x+" "+z+" "+z);
                continue;
            }
            else 
            if(y==z && y>x){
                System.out.println("YES");
                System.out.println(x+" "+x+" "+y);
                continue;
            }
            else 
            if(x==z && x>y){
                System.out.println("YES");
                System.out.println(y+" "+x+" "+y);
                continue;
            }
            else{
                System.out.println("NO");
                //System.out.println(x+" "+y+" "+z);
                continue;
            }

        }
        sc.close();
    }
}