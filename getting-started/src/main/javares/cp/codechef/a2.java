import java.util.*;
public class a2{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            int a[]=new int[n];
            int b[]=new int[n];
            for(int i=0;i<n;i++)
            a[i]=sc.nextInt();
            for(int i=0;i<n;i++)
            b[i]=sc.nextInt();
            //System.out.println(n);
            HashMap<Integer,Integer> h1=new HashMap<>();
            List<Integer> l1=new ArrayList<>();
            for(int i=0;i<n;i++)
            if(h1.containsKey(a[i]))
            h1.put(a[i], h1.get(a[i])+1);
            else
            {
                h1.put(a[i],1);
                l1.add(a[i]);
            }
            //System.out.println(n);

            int c=0,ci=0,fl=0;
            // Arrays.sort(a);
            // Arrays.sort(b);
            Collections.sort(l1);
            HashMap<Integer,Integer> h2=new HashMap<>();
            List<Integer> l2=new ArrayList<>();
            //for(int i=0;i<n;i++)
            for(int i=0;i<n;i++)
            if(h2.containsKey(b[i]))
            h2.put(b[i], h2.get(b[i])+1);
            else
            {
                h2.put(b[i],1);
                l2.add(b[i]);
            }
            int i=0,j=0;
            Collections.sort(l2);
            while(i<l1.size()&&j<l2.size()){
                if(l1.get(i)==l2.get(j))
                {
                    if(h1.get(l1.get(i))==h2.get(l2.get(j)))
                    {
                        i+=1;j+=1;
                    }
                    else{
                        int tot = h1.get(l1.get(i))+h2.get(l2.get(j));
                        if(tot%2!=0)
                        {
                            System.out.println(-1);
                            fl=1;
                            break;
                        }
                        c += Math.abs(tot/2 - h1.get(l1.get(i)));
                        i+=1;j+=1;
                    }

                }
                else{
                    if(l1.get(i)<l2.get(j)){
                        int tot= h1.get(l1.get(i));
                        if(tot%2!=0){
                            System.out.println(-1);
                            fl=1;
                            break;
                        }
                        ci += tot/2;
                        i+=1;
                    }
                    else{
                        int tot= h2.get(l2.get(j));
                        if(tot%2!=0){
                            System.out.println(-1);
                            fl=1;
                            break;
                        }
                        ci += tot/2;
                        j+=1;

                    }
                }
            }
            while(fl==0&&i<l1.size()){
                int tot= h1.get(l1.get(i));
                        if(tot%2!=0){
                            System.out.println(-1);
                            fl=1;
                            break;
                        }
                        ci += tot/2;
                        i+=1;
            }
            while(fl==0&&j<l2.size()){
                int tot= h2.get(l2.get(j));
                        if(tot%2!=0){
                            System.out.println(-1);
                            fl=1;
                            break;
                        }
                        ci += tot/2;
                        j+=1;
            }
            if(fl==1)
            continue;

            System.out.println(c+(ci/2));
        }
        

    }
}