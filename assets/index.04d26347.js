import{S as n,P as e,W as o,T as a,M as t,a as i,b as s,A as d,O as w,c as r,B as c,d as l,e as p,f as m}from"./vendor.1cbea3e0.js";const g=new n,f=new e(75,window.innerWidth/window.innerHeight,.1,1e3),u=new o({canvas:document.querySelector("#bg")});u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),f.position.setZ(100);const b=new a(10,3,16,100),h=new t({color:5832242}),j=new i(b,h);g.add(j);const y=new s(16777215);y.position.set(20,20,20);const A=new d(16777215);g.add(y,A);const S=new w(f,u.domElement),v=(new r).load("space.jpg");g.background=v;const x=(new r).load("beardie3.jpg"),P=new i(new c(4,4,4),new l({map:x}));P.position.set(20,10,15),g.add(P);const W=(new r).load("moon.jpg"),q=(new r).load("normal.jpg"),z=new i(new p(3,32,32),new t({map:W,normalMap:q}));g.add(z),Array(200).fill().forEach((function(){const n=new p(.25,15,15),e=new t({color:16777215}),o=new i(n,e),[a,s,d]=Array(3).fill().map((()=>m.randFloatSpread(100)));o.position.set(a,s,d),g.add(o)})),function n(){requestAnimationFrame(n),j.rotation.x+=.01,j.rotation.y+=.005,j.rotation.z+=.01,S.update(),u.render(g,f)}();