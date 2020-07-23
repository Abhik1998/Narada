import java.util.*;
public class a1{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        //int t=sc.nextInt();
        while(true){
            int h=sc.nextInt();
            int u=sc.nextInt();
            int d=sc.nextInt();
            int f=sc.nextInt();
            if(h==0)
            break;
            double a = (double)(f*u)/200;
            double b = d - u - a;
            double c = 0 - d;
            int ans=-1,fl=0;
            
            for(int x=1;x<1001;x++){
                double res = (double)a * Math.pow(x,2)+ (double)b*x +c;
                //System.out.println(res);
                if(res > -d )
                {ans = x;fl=0;break;}
                if(res < -h)
                {ans = x;fl=1;break;}
            }
            if(fl==1)
            System.out.println("success on day "+ans);
            else
            System.out.println("failure on day "+ans);


        }
    }
}