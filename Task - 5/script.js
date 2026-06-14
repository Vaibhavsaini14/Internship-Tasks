var products = [

  { id:1,  name:'Real Madrid Home Kit 24/25',       cat:'jersey', brand:'adidas',     price:3499, rating:4.9,
    badge:'new',  img:'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/bba09c80cdf3416c9957d5ea0dee0738_9366/Real_Madrid_24-25_Home_Jersey_White_IU5011_HM1.jpg',
    desc:'The iconic all-white home shirt of Real Madrid, crafted with AEROREADY moisture-wicking fabric. Features the iconic Adidas three stripes and the club crest embroidered on the chest.',
    sizes:['XS','S','M','L','XL','XXL'] },

  { id:2,  name:'FC Barcelona Home Jersey 24/25',   cat:'jersey', brand:'nike',       price:3299, rating:4.8,
    badge:'hot',  img:'https://imgs.search.brave.com/XHR-3xHgp1FeoZhXxCiUy1N7YG1b2rUS9KDsS8pBEgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGxpZ2h0c3Bl/ZWQuY29tL3Nob3Bz/LzYxMTIyOC9maWxl/cy83MTEwMzE3MS8z/MjV4Mzc1eDIvbmlr/ZS1mYy1iYXJjZWxv/bmEtMjUtMjYtYXV0/aGVudGljLWhvbWUt/amVyc2V5LWJsdWUu/anBn',
    desc:'The famous blaugrana stripes in Nike Dri-FIT ADV fabric. Lightweight and breathable, designed for peak performance on the pitch and comfort off it.',
    sizes:['XS','S','M','L','XL','XXL'] },

  { id:3,  name:'Brazil National Home Shirt 24/25', cat:'jersey', brand:'nike',       price:3199, rating:4.7,
    badge:'',     img:'https://imgs.search.brave.com/Jc339BNydD58p7oqw4ogimdmVGfVWEs9hKMhkMEQ1WU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3Vic2lkZXNwb3J0/cy5jb20vbWVkaWEv/Y2F0YWxvZy9wcm9k/dWN0L2NhY2hlL2Ew/NDBhMjFlMWMzYjQ5/NDZiNDkyYjliNjEw/OTcxOGMwL2YvNi9m/NmU3NDY1ZDg2OWUy/MWEyZDdkZjhkMjMy/MDgyMjcwN2YzYjI5/NjIzMThmYWI3ZDZm/NDYxNjlmNTI0ZjA4/MzJmLmpwZWc',
    desc:'The iconic Canarinha yellow — worn by legends across generations. Nike Dri-FIT technology keeps you dry during the most intense matches.',
    sizes:['S','M','L','XL','XXL'] },

  { id:4,  name:'Argentina 3-Star World Cup Home',  cat:'jersey', brand:'adidas',     price:3599, rating:4.9,
    badge:'hot',  img:'https://imgs.search.brave.com/AQydvuA4JhViMfvewI11z629zyn5w0KZQI2KRZTnXpk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb290/YmFsbG1vbmsuaW4v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDEvQXJnZW50aW5h/LTMtc3Rhci1NZXNz/aS1Xb3JsZC1jdXAt/aG9tZS1raXQtMi5q/cGc',
    desc:'Three stars above the badge. The light blue and white stripes of champions, updated with HEAT.RDY technology for warm-weather performance.',
    sizes:['S','M','L','XL','XXL'] },

  { id:5,  name:'England Home Kit 2024',            cat:'jersey', brand:'nike',       price:2999, rating:4.5,
    badge:'',     img:'https://imgs.search.brave.com/yojaCc7lkbL-HHsdgH3xpmZz7C_oTjvBmarg0joLNeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb290/YmFsbGtpdHN2YXBv/ci5jb20vY2RuL3No/b3AvZmlsZXMvMUI3/OEY2RTAtNkE3MC00/NTc4LUI0RjctRTMz/Mjg2REU5Q0QwLmpw/Zz92PTE3MTEwNzE3/OTc',
    desc:'Classic Three Lions white shirt with subtle St Georges Cross detailing. Nike Dri-FIT fabric for tournament conditions.',
    sizes:['XS','S','M','L','XL'] },

  { id:6,  name:'France Home Jersey 24/25',         cat:'jersey', brand:'nike',       price:3099, rating:4.6,
    badge:'',     img:'https://imgs.search.brave.com/bAYEMMAwEKrKebwClo6ZYH5FlSbcm-IFJniGtd2UZVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1rY3c4/N3hmcGNiL2ltYWdl/cy9zdGVuY2lsLzUw/MHg2NTkvcHJvZHVj/dHMvMjkxNy84NDU2/L2ZyYW5jZWhvbWVy/ZXBfXzQ5NDY1LjE3/MTQ2OTIyMDcuanBn/P2M9MQ',
    desc:'Les Bleus in their iconic deep navy. The jersey worn by the current world number one side, featuring Nike total body fit engineering.',
    sizes:['S','M','L','XL','XXL'] },

  { id:7,  name:'Germany Home Kit 2024',            cat:'jersey', brand:'adidas',     price:3199, rating:4.5,
    badge:'',     img:'https://imgs.search.brave.com/CJ9_CRx_pSVSoV1DPaIdQqG7j5ajw4PgIH6kvkIfBuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdWxs/dGltZXN0b3JlLmlu/L2Nkbi9zaG9wL2Zp/bGVzL0dlcm1hbnlr/cm9vc2hvbWUuanBn/P3Y9MTcxOTUxOTMy/MyZ3aWR0aD0yMDAw',
    desc:'Classic white with black accents — the eternal look of German efficiency. AEROREADY moisture management and recycled materials throughout.',
    sizes:['S','M','L','XL','XXL'] },

  { id:8,  name:'Manchester City Home 24/25',       cat:'jersey', brand:'puma',       price:3399, rating:4.7,
    badge:'new',  img:'https://imgs.search.brave.com/GXrSYgIfcvv69C-TZo3uxtz_5zkDJ9qaIt_R3VS52Hc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHVtYS5jb20v/aW1hZ2UvdXBsb2Fk/L2ZfYXV0byxxX2F1/dG8sYl9yZ2I6ZmFm/YWZhLHdfNjAwLGhf/NjAwL2dsb2JhbC83/NzUwNTAvMDEvZm5k/L0lORC9mbXQvcG5n/L01hbmNoZXN0ZXIt/Q2l0eS0yNC8yNS1N/ZW4ncy1BdXRoZW50/aWMtSG9tZS1KZXJz/ZXk',
    desc:'Sky blue — the colour of dominance. Puma dryCELL technology and an athletic fit designed for the demands of elite football.',
    sizes:['XS','S','M','L','XL'] },

  { id:9,  name:'Liverpool FC Home Shirt 24/25',    cat:'jersey', brand:'nike',       price:3499, rating:4.8,
    badge:'hot',  img:'https://imgs.search.brave.com/w7aEP2uW8BRlpQOb65IMlLNdBaBnv9ujBuWrpyKCcLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvdGVjaGtpdHpv/bmUuY29tL2ltYWdl/L2NhY2hlL2RhdGEv/MjAyNS0yNiUyMEpl/cnNleXMvQlBML0xG/Qy9Ib21lL0xGQy0y/NTI2LUhvbWUtU2hp/cnQtMTAwMHgxMDAw/LmpwZw',
    desc:'You wll Never Walk Alone in this iconic red. Nike Dri-FIT ADV with body-mapped ventilation zones for the high-press game.',
    sizes:['XS','S','M','L','XL','XXL'] },

  { id:10, name:'Portugal Home Kit 24/25',          cat:'jersey', brand:'nike',       price:3299, rating:4.6,
    badge:'',     img:'https://imgs.search.brave.com/Gj8bG4uQDcQRqdjWM8ceC6ks3_IewopfojxgDiq4tf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/cS1yNldEanN1OENh/QTlPY08zeGNoeTc1/djA2NjNESjU2SER1/MVBoMlY1di12OXJq/aXQ3ajdpNWx5YlUw/VkFMakEtenNlVDUx/eHZsWEJ5MmwtdGlv/TlhGQjNtWXNHYlN3/ZnlPQkhmN1dQTjNt/cXVLSzhmMHNQR2xv/ZDF4Ry0xRVN0ejZ5/YWxvVi1qNHRzWFVQ/VWk4cjJjdzhtVW9W/SGJRb3dhMmg1MjBW/aHVxbExoTzk2U3NT/RzN3MXlLYlFVL3Mx/MDg2L3BvcnR1Z2Fs/LTIwMjUtaG9tZS1r/aXQlMjAoMTMpLmpw/Zw',
    desc:'Deep crimson with green accents — the colours of a golden generation. Nike Dri-FIT with recycled polyester construction.',
    sizes:['S','M','L','XL','XXL'] },

  
  { id:11, name:'Real Madrid Away Jersey 24/25',    cat:'jersey', brand:'adidas',     price:3499, rating:4.7,
    badge:'',     img:'https://imgs.search.brave.com/PGipzQD4eiBVdodI2KEAi-FAqpcFWhgzP3cVjH7ej6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2Nj/ZXJwb3N0LmNvbS9j/ZG4vc2hvcC9maWxl/cy9TY3JlZW5TaG90/MjAyNC0wOC0wNWF0/OS4zMi40MEFNX2Ns/aXBwZWRfcmV2XzEu/cG5nP3Y9MTcyMjg2/NDg2NyZ3aWR0aD0x/NDQw',
    desc:'Striking purple away kit — Real Madrid has bold statement on the road. Same AEROREADY tech as the home kit, different attitude.',
    sizes:['XS','S','M','L','XL'] },

  { id:12, name:'FC Barcelona Away Kit 24/25',      cat:'jersey', brand:'nike',       price:3299, rating:4.6,
    badge:'sale', img:'https://imgs.search.brave.com/fF5v87sHRtq07n01igrjA42kP-XK1fp3e4VTBZOTjo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdWxs/dGltZXN0b3JlLmlu/L2Nkbi9zaG9wL2Zp/bGVzLzQxYTkzYjUx/NWNjOGY5ZDcuanBn/P3Y9MTcyNjU3MDg1/MCZ3aWR0aD0xMDI0',
    desc:'Gold and black — a Barça away kit unlike any before it. Nike Dri-FIT with a relaxed away-day fit.',
    sizes:['S','M','L','XL','XXL'] },

  { id:13, name:'Brazil Away Shirt 24/25',          cat:'jersey', brand:'nike',       price:3099, rating:4.5,
    badge:'',     img:'https://imgs.search.brave.com/haCXYI6xrfBx7CuU3wEjrAo5hzLsmr1zDQQ6hnOMPc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnVrc29jY2Vyc2hv/cC5jb20vaW1hZ2Vz/L2NhY2hlL3JlXzE3/MTMyMjgwMDZfYnJh/emlsLTIwMjQtYXV0/aGVudGljLWF3YXkt/Zm9vdGJhbGwtc2hp/cnQtNTAweDAuanBn',
    desc:'The deep blue of Brazil on the road — inspired by their Copa América away record. Lightweight Nike Dri-FIT construction.',
    sizes:['S','M','L','XL'] },

  { id:14, name:'Argentina Away Jersey 24/25',      cat:'jersey', brand:'adidas',     price:3399, rating:4.6,
    badge:'',     img:'https://imgs.search.brave.com/G5WiMa2gN22Gdj2MOiAfmYEdenRSHUC9r_PvHf_PY44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2Nj/ZXJzaG9wdXNhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Ni8wMS9BQVMxLTYu/anBn',
    desc:'Dark navy away — champions look good in anything. HEAT.RDY performance technology for hot-weather fixtures.',
    sizes:['XS','S','M','L','XL','XXL'] },

  { id:15, name:'Manchester City Away 24/25',       cat:'jersey', brand:'puma',       price:3299, rating:4.5,
    badge:'',     img:'https://imgs.search.brave.com/l2qnsW-V-czMI3lEKQG5OyE1thhraE40wDQp-NGk8DA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZm9vdGJhbGxm/cmVuenkuY29tL2Nk/bi9zaG9wL2ZpbGVz/L1BpY3NhcnQtMjQt/MDgtMDNfMTctNTMt/MTQtNjc1XzQ4MHg0/ODAuanBnP3Y9MTc0/MDA2NDgxMg',
    desc:'City on the road in burgundy and gold. Puma dryCELL with a slightly looser away-day cut.',
    sizes:['S','M','L','XL','XXL'] },

  { id:16, name:'Liverpool FC Away Shirt 24/25',    cat:'jersey', brand:'nike',       price:3499, rating:4.7,
    badge:'new',  img:'https://imgs.search.brave.com/95zGk8h0K6ykaf6lD_jHUk9PesVs1J8iozckiAD7W5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFoSzg3dS1DWUwu/anBn',
    desc:'Teal and white — a Liverpool away kit that turns heads on every away end. Nike Dri-FIT ADV for elite performance.',
    sizes:['XS','S','M','L','XL'] },

  { id:17, name:'France Away Jersey 24/25',         cat:'jersey', brand:'nike',       price:3199, rating:4.6,
    badge:'',     img:'https://imgs.search.brave.com/nbtmrsLN3QknLAA_zWuLJ3OSZeh6K3kJ2PYqlOXbhdA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9raXRz/aWRlLmluL2Nkbi9z/aG9wL2ZpbGVzL1Nj/cmVlbnNob3QyMDI0/LTA3LTE5YXQxMC41/Ny4yNlBNLnBuZz92/PTE3MjE0MTAxMDUm/d2lkdGg9MTQ0NQ',
    desc:'Les Bleus in white — fresh and clean. Nike total body fit engineering with lightweight Dri-FIT fabric.',
    sizes:['S','M','L','XL','XXL'] },

  { id:18, name:'Germany Away Kit 2024',            cat:'jersey', brand:'adidas',     price:3099, rating:4.4,
    badge:'sale', img:'https://imgs.search.brave.com/D6cpl8rU91WK-JtRLAQ1kc2j-iZMrvk4r0G0gWizvy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/SUtKbmY5d1lIRXU0/dlBhOFdXdlhYWm1k/LUY3OGhYdkFSYlpT/WkhhVHllVkJhcmFw/Rmo0OGVGSllLQ1B5/ZjFYMllsQUpsR3ZL/Vm1RZzlFTnBnbXg2/Wk1CaXRDMFhtWXFm/X1lBNllObXdCRUJ2/SjAwRF9Fa2hTWkU2/LW4tY2psS2lZbWd1/UGdONTQtV3VTVVJC/QlFQVndyVXRIRXR1/NGV3SUhJVlV3X3A2/R1Y5cWJ6T2FXTzR5/aU9aSE9rSTNJL3M2/MDAvZ2VybWFueS0y/MDI0LWtpdHMlMjAo/MTgpLmpwZw',
    desc:'Germany in purple for the first time in decades. AEROREADY fabric with recycled materials.',
    sizes:['S','M','L','XL'] },

  { id:19, name:'Portugal Away Jersey 24/25',       cat:'jersey', brand:'nike',       price:3199, rating:4.5,
    badge:'',     img:'https://imgs.search.brave.com/KiFGgJtoutq3O5M3CbJ3Qe5b6ezq9dSsOIQUUGiDrYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb2F0/a2l0c2hvcC5jb20v/Y2RuL3Nob3AvZmls/ZXMvNjlFMzBCNkYt/NDRENi01MENELUQ0/NkYtOTI2MDRCNDE1/NENGLTIud2VicD92/PTE3MjcyMDI0MDYm/d2lkdGg9Nzgw',
    desc:'Green away — Portugal reclaiming their alternative identity. Nike Dri-FIT with body-mapped construction.',
    sizes:['XS','S','M','L','XL','XXL'] },

  { id:20, name:'England Away Kit 2024',            cat:'jersey', brand:'nike',       price:2999, rating:4.4,
    badge:'',     img:'https://imgs.search.brave.com/TXhUvkDOFvgIp9JBDsy3kCN_WhqUyMU8ZSQfwSx7deg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmNv/cHljYXR6LmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAz/L2VuZ2xhbmQtYXdh/eS0yMDI0LWV1cm8t/a2l0LmpwZWc_Zml0/PTgwMCwxMTA1JnNz/bD0x',
    desc:'Three Lions in dark navy. Clean, minimal, and sharp — the England away kit for a new era.',
    sizes:['S','M','L','XL','XXL'] },


  { id:21, name:'Nike Mercurial Superfly 10 Elite', cat:'boots', brand:'nike',        price:24999, rating:4.9,
    badge:'new',  img:'https://imgs.search.brave.com/yJFpAG1m27nOPYlTJAkPWvU-zcOlOhGVaek_MA0OEoA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxZm9JenNHQmNM/LmpwZw',
    desc:'The fastest boot Nike has ever made. Flyknit upper, ACC technology for all weather grip, and a dynamic fit collar for ankle support.',
    sizes:['6','7','8','9','10','11','12'] },

  { id:22, name:'Nike Mercurial Vapor 15 Pro',      cat:'boots', brand:'nike',        price:14999, rating:4.8,
    badge:'hot',  img:'https://imgs.search.brave.com/wgjIXNaywBW1CovEF0OpPL3KI-j-tBHXwUhBo1JBU4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YmxyLnVuaWlkLml0/L3Byb2R1Y3QvMzUy/OTE2LzFhMjZhMDY3/MGNlNy5qcGc_d2lk/dGg9Mzg0MCZmb3Jt/YXQ9d2VicCZxPTc1',
    desc:'Pro-level speed. Vaporposite+ upper with ACC, lightweight soleplate, and a snug fit for natural touch on fast surfaces.',
    sizes:['6','7','8','9','10','11'] },

  { id:23, name:'Nike Phantom GX Elite FG',         cat:'boots', brand:'nike',        price:19999, rating:4.8,
    badge:'',     img:'https://imgs.search.brave.com/VQPv-8wOXhtGTH9AIO5WtfCJ4aLb21eRyI0V1UgkawU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxcjduMkhTdXJM/LmpwZw',
    desc:'Precision passing and shooting. Gripknit upper with fine micro-texture zones for exceptional ball feel in any condition.',
    sizes:['7','8','9','10','11','12'] },

  { id:24, name:'Nike Tiempo Legend 10 Elite',      cat:'boots', brand:'nike',        price:16999, rating:4.7,
    badge:'',     img:'https://imgs.search.brave.com/LlrJakyTJh-n7bcvYj9VatQXHF75nyOEwb4ZXM9bNIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFZaDVpSUtqaEwu/anBn',
    desc:'Classic leather sensation, modern engineering. Kangaroo leather upper with ACC and a new quad-zone traction soleplate.',
    sizes:['6','7','8','9','10','11'] },

  { id:25, name:'Nike Mercurial Vapor 15 Club',     cat:'boots', brand:'nike',        price:3499, rating:4.3,
    badge:'sale', img:'https://imgs.search.brave.com/9IHytcB0q4fcKM5M8uX2RON6Chv0PYBbEn8QecmvdW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEzTDRKeCs4V0wu/anBn',
    desc:'Entry-level Mercurial speed — same silhouette, accessible price. Synthetic upper with aggressive chevron traction.',
    sizes:['6','7','8','9','10','11','12'] },

  { id:26, name:'Adidas Predator Accuracy+ Elite',  cat:'boots', brand:'adidas',      price:22999, rating:4.9,
    badge:'hot',  img:'https://imgs.search.brave.com/5kDsk1GfL4YY0FYynCfQd1NEyZT2alz7yaEb4QQ1rIg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2Nr/aGFydGJvb3RibG9n/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMy9kc2Nf/Mzg3MC5qcGc_dz0x/NjIw',
    desc:'Ultimate control. Precisionshell upper with 3D Hybrid Elements for spin, power, and precision across every contact zone.',
    sizes:['7','8','9','10','11','12'] },

  { id:27, name:'Adidas X Speedportal.1 FG',       cat:'boots', brand:'adidas',      price:17999, rating:4.7,
    badge:'new',  img:'https://imgs.search.brave.com/XiV53no2UvBHRsE4gcWAE3Xf1G8X6cro4nvqStaEQtg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL2Jkd0FB/T1N3cWVWajJERlov/cy1sMTYwMC5wbmc',
    desc:'Speedframe soleplate and a soft mesh upper for maximum speed off the mark. Built for players who live in behind-the-line space.',
    sizes:['6','7','8','9','10','11'] },

  { id:28, name:'Adidas Copa Pure 2+ FG',           cat:'boots', brand:'adidas',      price:15999, rating:4.7,
    badge:'',     img:'https://imgs.search.brave.com/RLITbrrIgqRmLaUOsC0wD2wJ2bKqbNjVFKnsI7G9ULU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c3BvcnRzaG9wLmNv/bS9jYXRhbG9nL3By/b2R1Y3QvNTU5LzU1/OS8xLzUvMTU5ODQx/XzEuanBn',
    desc:'Genuine leather upper — the purest choice. Softer first touch, better ball feel, timeless silhouette.',
    sizes:['7','8','9','10','11','12'] },

  { id:29, name:'Adidas Predator Club FG',          cat:'boots', brand:'adidas',      price:2999, rating:4.2,
    badge:'sale', img:'https://imgs.search.brave.com/iXVQhG6GycWcGDIVGBCIq_6qv3tzvUHYvjCxb7-2pyw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pOC5h/bXBsaWVuY2UubmV0/L2kvanBsL2pkXzcy/NjkyMF9hP3FsdD05/MiZ3PTYwMCZoPTQy/NSZ2PTEmZm10PWF1/dG8',
    desc:'Predator control at a grassroots price. Synthetic upper with zone-control pads and classic Adidas traction.',
    sizes:['6','7','8','9','10','11','12'] },

  { id:30, name:'Adidas Gazelle Boot Turf',         cat:'boots', brand:'adidas',      price:4999, rating:4.4,
    badge:'',     img:'https://imgs.search.brave.com/_2S1qFIrErhfaUbfuC50EdGh7qwbdl0FtFG9F4RucTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmVh/a2VybmV3cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDUvYWRpZGFzLWdh/emVsbGUtaW5kb29y/LWJvb3Qtcm95YWwt/Ymx1ZS1KUTgzODMt/NC5qcGc',
    desc:'Turf-ready with street-ready style. Rubber outsole for AG/TF surfaces, suede-inspired upper for comfort.',
    sizes:['6','7','8','9','10','11'] },

  { id:31, name:'Puma Future 7 Ultimate FG/AG',     cat:'boots', brand:'puma',        price:21999, rating:4.8,
    badge:'new',  img:'https://imgs.search.brave.com/QLZ4abxb22Vuq50EBFHwj8o5Kq80ydoVHRim1mmb3Ho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHVtYS5jb20v/aW1hZ2UvdXBsb2Fk/L2ZfYXV0byxxX2F1/dG8sYl9yZ2I6ZmFm/YWZhLHdfNjAwLGhf/NjAwL2dsb2JhbC8x/MDc4MzQvMDEvc3Yw/MS9mbmQvR0JSL2Zt/dC9wbmcvRlVUVVJF/LTctVUxUSU1BVEUt/RlRSLUZHL0FHLU1l/bidzLUZvb3RiYWxs/LUJvb3Rz',
    desc:'FUZIONFIT+ compression band wraps the foot for a sock-like fit. GripControl Pro upper texture for total ball manipulation.',
    sizes:['7','8','9','10','11','12'] },

  { id:32, name:'Puma King Platinum 21 FG/AG',      cat:'boots', brand:'puma',        price:13999, rating:4.7,
    badge:'',     img:'https://imgs.search.brave.com/0Uq-gbzAGqbRWfgle6iLYeyjdeQ3_BqcqGpJtSvj8-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXVyb3Nwb3J0c29j/Y2VyLmNvbS9jZG4v/c2hvcC9wcm9kdWN0/cy9wdW1hLWtpbmct/cGxhdGludW0tc29j/Y2VyLWNsZWF0cy0x/MDY0NzgtMDRfMV8x/MTB4MTEwQDJ4LnBu/Zz92PTE2NjI0NDM1/MTE',
    desc:'The legendary King, rebuilt. Full grain leather upper, K-Better leather treatment for durability and exceptional touch.',
    sizes:['6','7','8','9','10','11'] },

  { id:33, name:'Puma Ultra 5 Ultimate FG/AG',      cat:'boots', brand:'puma',        price:14999, rating:4.6,
    badge:'hot',  img:'https://imgs.search.brave.com/HiAtHqqbOJKy6Xq8kZNXkS26uPnTBeqtW1l9WODbqv4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/dGNyYW1wb25zLmNv/bS9jZG4vc2hvcC9m/aWxlcy9DMEE2Q0VF/RC1GQTE0LTQ2MTYt/OEE0RS1EQUZGRDQ3/QzQ2OTAud2VicD92/PTE3Mzk3OTkxNTMm/d2lkdGg9MjA0OA',
    desc:'Sprint frameTM soleplate and MATRYXEVO upper — Pumas fastest boot. Built for wingers and full-backs.',
    sizes:['7','8','9','10','11','12'] },

  { id:34, name:'Puma Future Play FG/AG',           cat:'boots', brand:'puma',        price:3999, rating:4.3,
    badge:'',     img:'https://imgs.search.brave.com/4xJuzeqrGQl6UkW0_qh9RU_F64eSZvvP9NJMaYRd0VU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c3BvcnRzaG9wLmNv/bS9jYXRhbG9nL3By/b2R1Y3QvNTU5LzU1/OS8xLzYvMTY5OTM1/XzguanBn',
    desc:'Club-level Future with a textured synthetic upper. Good entry point for players getting into firm-ground football.',
    sizes:['6','7','8','9','10','11','12'] },

  { id:35, name:'New Balance Furon V7+ Pro',        cat:'boots', brand:'newbalance',  price:18999, rating:4.7,
    badge:'new',  img:'https://imgs.search.brave.com/5slugnPOFr_t6kfV-QgjCUU3bbHdL_vv_2qotbr3H-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEzS2NVWGRaVkwu/anBn',
    desc:'Hyposkin synthetic upper, lightweight SpeedFrame outsole. NBs most serious speed boot — used by elite forwards worldwide.',
    sizes:['7','8','9','10','11'] },

  { id:36, name:'New Balance Tekela V4+ Magia',     cat:'boots', brand:'newbalance',  price:16999, rating:4.6,
    badge:'',     img:'https://imgs.search.brave.com/2iK41gW6C3B6wubXmZS-wF6Pc-MpOHk78i48mZzYA70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YmxyLnVuaWlkLml0/L3Byb2R1Y3QvMjUz/NTgzL2FjOGYwNTQz/N2JkZC5qcGc_d2lk/dGg9Mzg0MCZmb3Jt/YXQ9d2VicCZxPTc1',
    desc:'The playmakers boot. Knit upper with GKpro grip-print for feel and control, engineered for creative midfielders.',
    sizes:['7','8','9','10','11','12'] },

  { id:37, name:'New Balance 442 V2 Team FG',       cat:'boots', brand:'newbalance',  price:4499, rating:4.4,
    badge:'',     img:'https://imgs.search.brave.com/w2UE6B_wI8wT8L9FhZCk4anyxs12ZY0a1XHZfTah2qo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5nb2F0LmNvbS90/cmFuc2Zvcm0vdjEv/YXR0YWNobWVudHMv/cHJvZHVjdF90ZW1w/bGF0ZV9waWN0dXJl/cy9pbWFnZXMvMTAy/LzM5OS84NDAvb3Jp/Z2luYWwvTVM0MUZN/QksucG5nLnBuZz9i/YWNrZ3JvdW5kPTI1/NSwyNTUsMjU1JnR5/cGU9d2VicA',
    desc:'Classic leather-look upper with a modern NB fit system. A reliable all-rounder for weekly players who want quality at a fair price.',
    sizes:['6','7','8','9','10','11','12'] },

  { id:38, name:'Nike Mercurial Superfly 10 Academy',cat:'boots',brand:'nike',        price:7999, rating:4.5,
    badge:'',     img:'https://imgs.search.brave.com/2lAwKNZpeVesh-9xtd9bp9z8Ffj75p1O9sZSx6HFQ04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFQREc4RmRtREwu/anBn',
    desc:'Academy-level Superfly — the speed silhouette at a price that makes sense for developing players.',
    sizes:['6','7','8','9','10','11'] },

  { id:39, name:'Adidas Predator Accuracy.3 FG',    cat:'boots', brand:'adidas',      price:5999, rating:4.4,
    badge:'sale', img:'https://imgs.search.brave.com/fo1Xo6XCXK07fxXOeREGDUHxH4nVw5w2qdHzMAD3s18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9k/dWN0aW1hZ2VzLmZv/b3R5LmNvbS82Njcx/YTc4NzU2MDU5YzI2/M2QyM2NkMzUvMC8z/ODQwLndlYnA_cT03/NQ',
    desc:'Mid-range Predator with real-rubber Hybrid Elements for control and power. The sweet spot in the range.',
    sizes:['7','8','9','10','11','12'] },

  { id:40, name:'Puma King Top FG',                 cat:'boots', brand:'puma',        price:8999, rating:4.6,
    badge:'hot',  img:'https://imgs.search.brave.com/jo61F3b-RgL4qyYFMkCQr20oKhfkhT0KYNBpc2xyU70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHVtYS5jb20v/aW1hZ2UvdXBsb2Fk/L2ZfYXV0byxxX2F1/dG8sYl9yZ2I6ZmFm/YWZhLHdfMzAwLGhf/MzAwL2dsb2JhbC8x/MDg0NTcvMDIvc3Yw/MS9mbmQvRUVBL2Zt/dC9wbmcvS0lORy0y/MC1VTFRJTUFURS1G/Ry9BRy11bmlzZWtz/LXZvZXRiYWxzY2hv/ZW5lbg',
    desc:'Full grain leather from stud to cuff. The King Top is for players who want nothing between their foot and the ball.',
    sizes:['6','7','8','9','10','11','12'] },


  { id:41, name:'Nike Air Max 90 Football Ed.',     cat:'sneakers', brand:'nike',     price:9499, rating:4.8, badge:'new',
    img:'https://imgs.search.brave.com/6h3DQb5U1rjEAZvCy31WadlNsYocE8weBj5o9_vNjZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1jZG4uaHlwYi5z/dC9odHRwczovL2h5/cGViZWFzdC5jb20v/aW1hZ2UvMjAyMS8w/NS9uaWtlLWFpci1t/YXgtOTAtc2hvZS1y/ZWxlYXNlLWluZm8t/MDAxLmpwZz9xPTc1/Jnc9ODAwJmNicj0x/JmZpdD1tYXg',
    desc:'The Air Max 90 reimagined in football colourways — a collectors piece that lives between the pitch and the street.',
    sizes:['6','7','8','9','10','11','12'] },

  { id:42, name:'Adidas Samba OG',                  cat:'sneakers', brand:'adidas',   price:7999, rating:4.9, badge:'hot',
    img:'https://imgs.search.brave.com/5zIEJ2lJ9iPvbcNOovcUxsmzrTxs0lNLHU6mJ87TN-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYWRpZGFzLmNv/bS9pbWFnZXMvd182/MDAsZl9hdXRvLHFf/YXV0by8wMTE3NDRl/ZjI3M2Q0YTY2Yjlj/Yzg4MGI5ODAzNDBh/Ml85MzY2L1NhbWJh/X09HX1Nob2VzX1do/aXRlX0lEMDQ3OF8w/MV9zdGFuZGFyZC5q/cGc',
    desc:'The Samba. Born in 1950 on frozen pitches, adopted by every subculture since. Leather upper, gum sole — timeless.',
    sizes:['6','7','8','9','10','11'] },

  { id:43, name:'Adidas Gazelle Bold',              cat:'sneakers', brand:'adidas',   price:6999, rating:4.7, badge:'',
    img:'https://imgs.search.brave.com/baXHTjy1t1Qz4_MjvTGohybGE5SMfBQEa30Zgz7iKtE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9vdi5jb20uYXIv/b24vZGVtYW5kd2Fy/ZS5zdGF0aWMvLS9T/aXRlcy0zNjUtZGFi/cmEtY2F0YWxvZy9k/ZWZhdWx0L2R3ZDY5/OTNmODIvcHJvZHVj/dHMvQURKUjc1MjMv/QURKUjc1MjMtMi5K/UEc',
    desc:'Platform Gazelle — a bold reinterpretation of the archival court shoe. Suede upper, chunky cupsole.',
    sizes:['5','6','7','8','9','10','11'] },

  { id:44, name:'Nike Air Force 1 Low',             cat:'sneakers', brand:'nike',     price:7499, rating:4.8, badge:'',
    img:'https://imgs.search.brave.com/OHPM4WpzN8NFEYuRaA7K5Jpw6i0rkFJDsPthXOGcw-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZG4t/c3RhdGljMS5ueWth/YS5jb20vbnlrZGVz/aWduc3R1ZGlvLWlt/YWdlcy9wdWIvbWVk/aWEvY2F0YWxvZy9w/cm9kdWN0LzUvMy81/MzI0YzhlTmlrZS1E/VjA3ODgtMDAxXzEu/anBnP3JuZD0yMDIw/MDUyNjE5NTIwMCZ0/cj13LTUxMg',
    desc:'The AF1 — basketball royalty turned street icon. Full leather upper, encapsulated Air unit, the white-on-white that never dies.',
    sizes:['6','7','8','9','10','11','12'] },

  { id:45, name:'Puma Suede Classic XXI',           cat:'sneakers', brand:'puma',     price:4999, rating:4.5, badge:'sale',
    img:'https://imgs.search.brave.com/v_5FTDYiAsQc27DufPAuX0gCOYmPcfxj5-4mWH-XTxg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL3lOZ0FB/T1N3cGJWazJUUUIv/cy1sMTYwMC5qcGc',
    desc:'The Suede has been here since 1968. Soft suede upper, Formstrip branding, the Puma archive at its most essential.',
    sizes:['6','7','8','9','10','11'] },

  
  { id:46, name:'Adidas UEFA Champions League Ball', cat:'accessories', brand:'adidas', price:2999, rating:4.8, badge:'new',
    img:'https://imgs.search.brave.com/PmQNi7VCTXD1QX5oHKTuHdnpKNoouPcE0dRHStT0Rbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI1/ODY4NDIyOC9waG90/by9kb3J0bXVuZC1n/ZXJtYW55LWRldGFp/bGVkLXZpZXctb2Yt/dGhlLWNoYW1waW9u/cy1sZWFndWUtYWRp/ZGFzLWZpbmFsZS0y/NS1tYXRjaC1iYWxs/LXByaW9yLXRvLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1R/RExTUUdlUndTNVNk/U0N6cVVuWDBaRnhf/SVVHYkhVd216d1d4/MFRMOXNZPQ',
    desc:'The official UCL match ball — Thermobonded panels, butyl bladder for shape retention, premium visual identity.',
    sizes:['One Size'] },

  { id:47, name:'Nike GK Vapor Grip 3 Gloves',      cat:'accessories', brand:'nike',  price:1999, rating:4.6, badge:'',
    img:'https://imgs.search.brave.com/AdEdmiH3X2AOnU2nJNbNfvA0DXApLKZl7OayFlISdbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1rY3c4/N3hmcGNiL2ltYWdl/cy9zdGVuY2lsLzUw/MHg2NTkvcHJvZHVj/dHMvMTEwOS8yODI1/L2ltYWdlLXJlbW92/ZWJnLXByZXZpZXdf/LV8yMDIxLTExLTEy/VDEyMzYyNy44ODZf/XzExNzg4LjE2MzY3/NDk1MzIucG5nP2M9/MQ',
    desc:'3mm Gunn Cut latex for superior grip. Pre-curved fingers, adjustable wrist strap for the modern shot-stopper.',
    sizes:['7','8','9','10','11'] },

  { id:48, name:'Nike Mercurial Lite Shin Pads',    cat:'accessories', brand:'nike',  price:899, rating:4.4, badge:'',
    img:'https://imgs.search.brave.com/SPbJH25SW57Tvkk--fYf6GD8J2DPa_lxzHjlswqRHSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YmxyLnVuaWlkLml0/L3Byb2R1Y3QvMjU5/Mjc5LzFhZTc4YWFh/MDE5Ni5qcGc_d2lk/dGg9Mzg0MCZmb3Jt/YXQ9d2VicCZxPTc1',
    desc:'Hard-shell shield, foam backing, minimal weight. Stays in place for the full 90 with the integrated ankle sleeve.',
    sizes:['S','M','L'] },

  { id:49, name:'Adidas Tiro Team Kit Bag',         cat:'accessories', brand:'adidas', price:2499, rating:4.7, badge:'hot',
    img:'https://imgs.search.brave.com/v0vUCFpPuIJvxEEtHTntWofTPp7CmOq_V2knjXctWxA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcG9y/dHNiZW1lLmNvbS5h/dS9jZG4vc2hvcC9w/cm9kdWN0cy9JQjg2/NTBBRElEQVNUSVJP/RFVGRkxFTEFSR0Uu/anBnP3Y9MTY2OTc2/ODUxMg',
    desc:'60L capacity, ventilated boot compartment, padded straps. The club bag that fits your full kit and everything else.',
    sizes:['One Size'] },

  { id:50, name:'Adidas Team Speed Bottle 1L',      cat:'accessories', brand:'adidas', price:699, rating:4.3, badge:'',
    img:'https://imgs.search.brave.com/O3cFrUA0ZKpDCCdRFcHhvgyk7Gcoa7YhPn8G4TmgMm4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dnNhdGhsZXRpY3Mu/Y29tL3N0b3JlL2lt/YWdlcy9QLzUxNDg2/MjYuanBn',
    desc:'Squeezable 1-litre water bottle designed for the touchline. Leak-proof cap, club logo branding available.',
    sizes:['One Size'] }
];


var cart        = JSON.parse(localStorage.getItem('u90cart')     || '[]');
var wishlist    = JSON.parse(localStorage.getItem('u90wish')     || '[]');
var recentViewed= JSON.parse(localStorage.getItem('u90recent')   || '[]');
var activeCat   = 'all';
var activeBrand = 'all';
var activePriceRange = 'all';
var searchTerm  = '';
var currentPD   = null;   


function getFiltered() {
  var list = products.filter(function(p) {
    var catOk   = activeCat   === 'all' || p.cat   === activeCat;
    var brandOk = activeBrand === 'all' || p.brand === activeBrand;
    var priceOk = true;
    if (activePriceRange === 'under3000') priceOk = p.price < 3000;
    if (activePriceRange === '3to6')      priceOk = p.price >= 3000 && p.price <= 6000;
    if (activePriceRange === 'above6')    priceOk = p.price > 6000;
    var searchOk = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return catOk && brandOk && priceOk && searchOk;
  });

  var sort = document.getElementById('sorter').value;
  if (sort === 'low')    list.sort(function(a,b){ return a.price - b.price; });
  if (sort === 'high')   list.sort(function(a,b){ return b.price - a.price; });
  if (sort === 'rating') list.sort(function(a,b){ return b.rating - a.rating; });

  return list;
}

function renderProducts() {
  var list = getFiltered();
  var grid = document.getElementById('pgrid');
  var count = list.length;
  document.getElementById('resCount').textContent =
    count + ' product' + (count !== 1 ? 's' : '') + ' found';
  grid.innerHTML = '';

  if (count === 0) {
    var suggestion = '';
    if (activeBrand !== 'all' && activeCat !== 'all') {
      suggestion = ' — try removing the brand or category filter.';
    } else if (searchTerm) {
      suggestion = ' — try a different search term.';
    }
    grid.innerHTML = '<p style="color:var(--muted);padding:60px 0;grid-column:1/-1;text-align:center;font-size:0.95rem;">No products found' + suggestion + '</p>';
    return;
  }

  list.forEach(function(p) {
    var inCart     = cart.find(function(c){ return c.id === p.id; });
    var isWished   = wishlist.includes(p.id);
    var badgeHtml  = p.badge ? '<span class="pbadge ' + p.badge + '">' + p.badge + '</span>' : '';
    var btnLabel   = inCart ? '<i class="fas fa-check"></i> Added' : 'Add to Cart';
    var btnClass   = 'add-btn' + (inCart ? ' added' : '');
    var wishClass  = 'wish-btn' + (isWished ? ' wishlisted' : '');

    var card = document.createElement('div');
    card.className = 'pcard';
    card.innerHTML =
      '<div class="pcard-img">' +
        badgeHtml +
        '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" />' +
        '<button class="' + wishClass + '" onclick="toggleWish(event,' + p.id + ')" title="Save"><i class="fas fa-heart"></i></button>' +
      '</div>' +
      '<div class="pcard-body">' +
        '<p class="pcard-brand">' + p.brand + '</p>' +
        '<p class="pcard-name">' + p.name + '</p>' +
        '<div class="pcard-meta">' +
          '<span class="pcard-price">₹' + p.price.toLocaleString('en-IN') + '</span>' +
          '<span class="pcard-rating"><span class="star">★</span> ' + p.rating + '</span>' +
        '</div>' +
        '<button class="' + btnClass + '" id="btn' + p.id + '" onclick="addToCart(event,' + p.id + ')">' + btnLabel + '</button>' +
      '</div>';

    card.addEventListener('click', function(e) {
      if (e.target.closest('.wish-btn') || e.target.closest('.add-btn')) return;
      openPD(p.id);
    });

    grid.appendChild(card);
  });
}

function setCat(btn, cat) {
  activeCat = cat;
  document.querySelectorAll('.ctab').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  renderProducts();
}

function setBrand(btn, brand) {
  activeBrand = brand;
  document.querySelectorAll('.btab').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  renderProducts();
}

function setPrice(btn, range) {
  activePriceRange = range;
  document.querySelectorAll('.ptab').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  renderProducts();
}

function searchProducts() {
  searchTerm = document.getElementById('searchbar').value;
  renderProducts();
}

function mobSearch() {
  searchTerm = document.getElementById('mobSearchInput').value;
  renderProducts();
}

function toggleMobSearch() {
  var bar = document.getElementById('mobSearchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    document.getElementById('mobSearchInput').focus();
  }
}


function addToCart(event, id) {
  if (event) event.stopPropagation();
  var product  = products.find(function(p){ return p.id === id; });
  var existing = cart.find(function(c){ return c.id === id; });

  
  var realSizes = product.sizes.filter(function(s){ return s !== 'One Size'; });
  if (realSizes.length > 0 && !currentPD) {
    openPD(id);
    return;
  }

  if (existing) {
    existing.qty += 1;
  } else {
    var selectedSize = currentPD && currentPD.selectedSize ? currentPD.selectedSize : (product.sizes[0] || '');
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1, size: selectedSize });
  }

  saveCart();
  renderProducts();
  renderCart();
  showToast('<i class="fas fa-check-circle"></i> ' + product.name + ' added to cart');
}

function removeFromCart(id) {
  cart = cart.filter(function(c){ return c.id !== id; });
  saveCart();
  renderCart();
  renderProducts();
}

function changeQty(id, delta) {
  var item = cart.find(function(c){ return c.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('u90cart', JSON.stringify(cart));
  var total = cart.reduce(function(s,c){ return s + c.qty; }, 0);
  document.getElementById('cartCount').textContent = total;
  document.getElementById('cartCountSide').textContent = total;
}

function renderCart() {
  var container = document.getElementById('cartItems');
  var empty     = document.getElementById('cartEmpty');
  var foot      = document.getElementById('cartFoot');
  container.innerHTML = '';

  if (cart.length === 0) {
    empty.style.display = 'flex';
    foot.style.display  = 'none';
    return;
  }

  empty.style.display = 'none';
  foot.style.display  = 'block';

  var total = 0;
  cart.forEach(function(item) {
    total += item.price * item.qty;
    var div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML =
      '<div class="ci-img"><img src="' + item.img + '" alt="' + item.name + '" /></div>' +
      '<div class="ci-info">' +
        '<p class="ci-name">' + item.name + '</p>' +
        (item.size && item.size !== 'One Size' ? '<p class="ci-size">Size: ' + item.size + '</p>' : '') +
        '<p class="ci-price">₹' + item.price.toLocaleString('en-IN') + '</p>' +
        '<div class="ci-qty">' +
          '<button onclick="changeQty(' + item.id + ',-1)">−</button>' +
          '<span>' + item.qty + '</span>' +
          '<button onclick="changeQty(' + item.id + ',1)">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="ci-remove" onclick="removeFromCart(' + item.id + ')"><i class="fas fa-times"></i></button>';
    container.appendChild(div);
  });

  document.getElementById('cartTotal').textContent  = '₹' + total.toLocaleString('en-IN');
  document.getElementById('modalTotal').textContent = '₹' + total.toLocaleString('en-IN');
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}


function toggleWish(event, id) {
  if (event) event.stopPropagation();
  var idx = wishlist.indexOf(id);
  var product = products.find(function(p){ return p.id === id; });
  if (idx === -1) {
    wishlist.push(id);
    showToast('<i class="fas fa-heart"></i> Saved to wishlist', 'wish-toast');
  } else {
    wishlist.splice(idx, 1);
    showToast('<i class="fas fa-heart-broken"></i> Removed from wishlist', 'wish-toast');
  }
  localStorage.setItem('u90wish', JSON.stringify(wishlist));
  renderProducts();
  renderWishlist();
}

function renderWishlist() {
  var section = document.getElementById('wishlistSection');
  var grid    = document.getElementById('wlGrid');
  var items   = products.filter(function(p){ return wishlist.includes(p.id); });
  document.getElementById('wlCount').textContent = items.length;

  if (items.length === 0) {
    section.classList.remove('has-items');
    grid.innerHTML = '';
    return;
  }

  section.classList.add('has-items');
  grid.innerHTML = '';

  items.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'pcard';
    var inCart = cart.find(function(c){ return c.id === p.id; });
    var btnLabel = inCart ? '<i class="fas fa-check"></i> Added' : 'Add to Cart';
    var btnClass = 'add-btn' + (inCart ? ' added' : '');

    card.innerHTML =
      '<div class="pcard-img">' +
        '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" />' +
        '<button class="wish-btn wishlisted" onclick="toggleWish(event,' + p.id + ')"><i class="fas fa-heart"></i></button>' +
      '</div>' +
      '<div class="pcard-body">' +
        '<p class="pcard-brand">' + p.brand + '</p>' +
        '<p class="pcard-name">' + p.name + '</p>' +
        '<div class="pcard-meta">' +
          '<span class="pcard-price">₹' + p.price.toLocaleString('en-IN') + '</span>' +
          '<span class="pcard-rating"><span class="star">★</span> ' + p.rating + '</span>' +
        '</div>' +
        '<button class="' + btnClass + '" onclick="addToCart(event,' + p.id + ')">' + btnLabel + '</button>' +
      '</div>';

    card.addEventListener('click', function(e) {
      if (e.target.closest('.wish-btn') || e.target.closest('.add-btn')) return;
      openPD(p.id);
    });

    grid.appendChild(card);
  });
}


function addRecent(id) {
  recentViewed = recentViewed.filter(function(r){ return r !== id; });
  recentViewed.unshift(id);
  if (recentViewed.length > 6) recentViewed = recentViewed.slice(0,6);
  localStorage.setItem('u90recent', JSON.stringify(recentViewed));
  renderRecent();
}

function renderRecent() {
  var section = document.getElementById('recentSection');
  var row     = document.getElementById('recentRow');
  var items   = recentViewed.map(function(id){ return products.find(function(p){ return p.id === id; }); }).filter(Boolean);

  if (items.length === 0) {
    section.classList.remove('has-items');
    return;
  }

  section.classList.add('has-items');
  row.innerHTML = '';

  items.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'recent-card';
    card.innerHTML =
      '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" />' +
      '<div class="recent-card-body">' +
        '<p class="recent-card-name">' + p.name + '</p>' +
        '<p class="recent-card-price">₹' + p.price.toLocaleString('en-IN') + '</p>' +
      '</div>';
    card.addEventListener('click', function(){ openPD(p.id); });
    row.appendChild(card);
  });
}


function openPD(id) {
  var p = products.find(function(prod){ return prod.id === id; });
  if (!p) return;

  currentPD = { id: p.id, selectedSize: null };
  addRecent(id);

  document.getElementById('pdImg').src      = p.img;
  document.getElementById('pdImg').alt      = p.name;
  document.getElementById('pdBrand').textContent  = p.brand.toUpperCase();
  document.getElementById('pdName').textContent   = p.name;
  document.getElementById('pdPrice').textContent  = '₹' + p.price.toLocaleString('en-IN');
  document.getElementById('pdRating').textContent = p.rating + ' (' + Math.floor(p.rating * 200) + ' reviews)';
  document.getElementById('pdDesc').textContent   = p.desc;

  var sizesEl = document.getElementById('pdSizes');
  sizesEl.innerHTML = '';
  p.sizes.forEach(function(sz, i) {
    var btn = document.createElement('button');
    btn.className = 'sz-btn' + (i === 0 ? ' selected' : '');
    btn.textContent = sz;
    if (i === 0) currentPD.selectedSize = sz;
    btn.addEventListener('click', function() {
      document.querySelectorAll('.sz-btn').forEach(function(b){ b.classList.remove('selected'); });
      btn.classList.add('selected');
      currentPD.selectedSize = sz;
    });
    sizesEl.appendChild(btn);
  });

  var isWished = wishlist.includes(p.id);
  var wishBtn  = document.getElementById('pdWishBtn');
  wishBtn.className = 'pd-wish-btn' + (isWished ? ' wishlisted' : '');

  var inCart = cart.find(function(c){ return c.id === p.id; });
  var addBtn = document.getElementById('pdAddBtn');
  if (inCart) {
    addBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
  } else {
    addBtn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
  }

  document.getElementById('pdOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePD() {
  document.getElementById('pdOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentPD = null;
}

function pdAddToCart() {
  if (!currentPD) return;
  var product  = products.find(function(p){ return p.id === currentPD.id; });
  var existing = cart.find(function(c){ return c.id === currentPD.id; });

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id:    product.id,
      name:  product.name,
      price: product.price,
      img:   product.img,
      qty:   1,
      size:  currentPD.selectedSize || product.sizes[0]
    });
  }

  saveCart();
  renderProducts();
  renderCart();
  renderWishlist();

  var addBtn = document.getElementById('pdAddBtn');
  addBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';

  showToast('<i class="fas fa-check-circle"></i> ' + product.name + ' added to cart');
  setTimeout(function(){ closePD(); }, 800);
}

function pdToggleWish() {
  if (!currentPD) return;
  toggleWish(null, currentPD.id);
  var isWished = wishlist.includes(currentPD.id);
  document.getElementById('pdWishBtn').className = 'pd-wish-btn' + (isWished ? ' wishlisted' : '');
}

document.getElementById('pdOverlay').addEventListener('click', function(e) {
  if (e.target === this) closePD();
});


function showToast(message, extraClass) {
  var container = document.getElementById('toastContainer');
  var toast = document.createElement('div');
  toast.className = 'toast' + (extraClass ? ' ' + extraClass : '');
  toast.innerHTML = message;
  container.appendChild(toast);
  setTimeout(function(){ if (toast.parentNode) toast.parentNode.removeChild(toast); }, 2800);
}

function openCheckout() {
  toggleCart();
  document.getElementById('modalOverlay').classList.add('open');
}

function closeCheckout() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function validateCheckout(event) {
  event.preventDefault();
  var name    = document.getElementById('fname').value.trim();
  var email   = document.getElementById('femail').value.trim();
  var phone   = document.getElementById('fphone').value.trim();
  var address = document.getElementById('faddress').value.trim();
  var city    = document.getElementById('fcity').value.trim();
  var pin     = document.getElementById('fpin').value.trim();
  var emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRx = /^[6-9]\d{9}$/;
  var pinRx   = /^\d{6}$/;
  var valid   = true;

  ['fe1','fe2','fe3','fe4','fe5','fe6','orderOk'].forEach(function(id){
    document.getElementById(id).textContent = '';
  });

  if (!name)                      { document.getElementById('fe1').textContent = 'Full name is required.';         valid = false; }
  if (!email)                     { document.getElementById('fe2').textContent = 'Email is required.';             valid = false; }
  else if (!emailRx.test(email))  { document.getElementById('fe2').textContent = 'Enter a valid email.';           valid = false; }
  if (!phone)                     { document.getElementById('fe3').textContent = 'Phone number is required.';      valid = false; }
  else if (!phoneRx.test(phone))  { document.getElementById('fe3').textContent = 'Enter a valid 10-digit number.'; valid = false; }
  if (!address)                   { document.getElementById('fe4').textContent = 'Address is required.';           valid = false; }
  if (!city)                      { document.getElementById('fe5').textContent = 'City is required.';              valid = false; }
  if (!pin)                       { document.getElementById('fe6').textContent = 'Pincode is required.';           valid = false; }
  else if (!pinRx.test(pin))      { document.getElementById('fe6').textContent = 'Enter a valid 6-digit pincode.'; valid = false; }

  if (valid) {
    var okEl = document.getElementById('orderOk');
    okEl.textContent = '✓ Order placed! Thank you, ' + name + '. We\'ll be in touch soon.';
    cart = [];
    saveCart();
    renderCart();
    renderProducts();
    renderWishlist();
    document.getElementById('checkForm').reset();
    
    setTimeout(function(){
      closeCheckout();
      okEl.textContent = '';
      showToast('<i class="fas fa-check-circle"></i> Order confirmed! Check your email for details.');
    }, 2500);
  }
}


function toggleNav() {
  document.getElementById('mobmenu').classList.toggle('open');
}


function syncCartButtonStates() {
  cart.forEach(function(item) {
    var btn = document.getElementById('btn' + item.id);
    if (btn) {
      btn.innerHTML = '<i class="fas fa-check"></i> Added';
      btn.classList.add('added');
    }
  });
}


renderProducts();
renderCart();
saveCart();
renderWishlist();
renderRecent();
syncCartButtonStates();
