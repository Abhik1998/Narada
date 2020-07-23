import java.util.*;
public class a2{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            //int d[]=new int[2*n];
            //int j=0;
            //int a[]=new int[n];
            HashSet<Integer> h=new HashSet<>();
            for(int i=0;i<2*n;i++){
                int r=sc.nextInt();
                if(!h.contains(r))
                {
                    //a[j++]=r;
                    h.add(r);
                    System.out.print(r+" ");
                }
            }
            System.out.println();
            
        }
        sc.close();
    }
}