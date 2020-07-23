import java.util.*;
public class a14{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            int p[]=new int[2*n];
            for(int i=0;i<2*n;i++)
            p[i]=sc.nextInt();
            // int a[]=new int[n];
            // int b[]=new int[n];
            Stack<Integer> a=new Stack<>();
            Stack<Integer> b=new Stack<>();

            //int j=0,k=0;
            a.push(p[0]);
            if(a.peek()<p[1])
            b.push(p[1]);
            else
            a.push(p[1]);
            int fl=0;
            // for(int i=2;i<2*n;i++){
                
            //     if(a[j]<b[k]){
            //         if(k==n-1)
            //         {
            //             System.out.println("NO");
            //             fl=1;
            //             break;
            //         }
            //         b[++k]=p[i];

            //     }
                
            //     else
            //     {
            //         if(j==n-1)
            //         {
            //             System.out.println("NO");
            //             fl=1;
            //             break;
            //         }
                    
            //         a[++j]=p[i];

            //    }
                
                



            if(recur(p,a,b,0,n,fl))
            System.out.println("YES");
            else
            System.out.println("NO");


        }
        sc.close();
    }
    public static boolean recur(int p[],Stack<Integer> a,Stack<Integer> b,int i,int n,int fl){
        boolean pk = true;
        if(i>=2*n && a.size()==n && b.size()==n)
        return pk;
        if(i>=2*n && a.size()!=n && b.size()!=n)
        return false;
        System.out.println(i+" "+a+" "+b);
        if(p[i]<a.peek()&&p[i]<b.peek()){
            if((fl==0&&a.peek()<b.peek())||(fl==1&&a.peek()>b.peek()))
            {
                //any
                a.push(p[i]);
                Stack<Integer> at=a;
                a.pop();
                b.push(p[i]);
                Stack<Integer> bt=b;
                b.pop();
                pk = pk && (recur(p,at,b,i+1,n,0)||recur(p,a,bt,i+1,n,1));
            }
            else
            if((fl==1&&a.peek()<b.peek())||(fl==0&&a.peek()>b.peek()))
            {
                b.push(p[i]);
                pk = pk && recur(p,a,b,i+1,n,1);
            }

        }
        else
        if(a.peek()<p[i] && p[i]<b.peek()){
            if(fl==0)
            {
                //any
                a.push(p[i]);
                Stack<Integer> at=a;
                a.pop();
                b.push(p[i]);
                Stack<Integer> bt=b;
                b.pop();
                pk = pk && (recur(p,at,b,i+1,n,0)||recur(p,a,bt,i+1,n,1));
            }
            else
            {
                b.push(p[i]);
                pk = pk || recur(p,a,b,i+1,n,1);
            }
        }
        else
        if(a.peek()>p[i] && p[i]>b.peek()){
            if(fl==1)
            {
                //any
                a.push(p[i]);
                Stack<Integer> at=a;
                a.pop();
                b.push(p[i]);
                Stack<Integer> bt=b;
                b.pop();
                pk = pk && (recur(p,at,b,i+1,n,0)||recur(p,a,bt,i+1,n,1));
            }
            else{
                a.push(p[i]);
                pk = pk || recur(p,a,b,i+1,n,1);
            }
        }
        else{
                a.push(p[i]);
                Stack<Integer> at=a;
                a.pop();
                b.push(p[i]);
                Stack<Integer> bt=b;
                b.pop();
                pk = pk && (recur(p,at,b,i+1,n,0)||recur(p,a,bt,i+1,n,1));
        }

        return pk;
    }

    
}