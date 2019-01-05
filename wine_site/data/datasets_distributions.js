// statistical distribution of the different datasets


var data = [{"dataset": "full", "prices": [4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0, 81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0, 100.0, 101.0, 102.0, 103.0, 104.0, 105.0, 106.0, 107.0, 108.0, 109.0, 110.0, 111.0, 112.0, 113.0, 114.0, 115.0, 116.0, 117.0, 118.0, 119.0, 120.0, 121.0, 122.0, 123.0, 124.0, 125.0, 126.0, 127.0, 128.0, 129.0, 130.0, 131.0, 132.0, 133.0, 134.0, 135.0, 136.0, 137.0, 138.0, 139.0, 140.0, 141.0, 142.0, 143.0, 144.0, 145.0, 146.0, 147.0, 148.0, 149.0, 150.0, 151.0, 152.0, 153.0, 154.0, 155.0, 156.0, 157.0, 158.0, 159.0, 160.0, 161.0, 162.0, 163.0, 164.0, 165.0, 166.0, 167.0, 168.0, 169.0, 170.0, 171.0, 172.0, 173.0, 174.0, 175.0, 176.0, 177.0, 178.0, 179.0, 180.0, 181.0, 182.0, 183.0, 184.0, 185.0, 186.0, 187.0, 188.0, 189.0, 190.0, 191.0, 192.0, 193.0, 194.0, 195.0, 196.0, 197.0, 198.0, 199.0, 200.0, 201.0, 202.0, 203.0, 204.0, 205.0, 206.0, 207.0, 208.0, 209.0, 210.0, 211.0, 212.0, 213.0, 214.0, 215.0, 216.0, 217.0, 218.0, 219.0, 220.0, 221.0, 222.0, 223.0, 224.0, 225.0, 226.0, 227.0, 228.0, 229.0, 230.0, 231.0, 232.0, 233.0, 234.0, 235.0, 236.0, 237.0, 238.0, 239.0, 240.0, 241.0, 242.0, 243.0, 244.0, 245.0, 246.0, 247.0, 248.0, 249.0, 250.0, 251.0, 252.0, 253.0, 254.0, 255.0, 256.0, 257.0, 258.0, 259.0, 260.0, 261.0, 262.0, 263.0, 264.0, 265.0, 266.0, 267.0, 268.0, 269.0, 270.0, 271.0, 272.0, 273.0, 274.0, 275.0, 276.0, 277.0, 278.0, 279.0, 280.0, 281.0, 282.0, 283.0, 284.0, 285.0, 286.0, 287.0, 288.0, 289.0, 290.0, 291.0, 292.0, 293.0, 294.0, 295.0, 296.0, 297.0, 298.0, 299.0], "prices_dist": [9.320706882409962e-05, 0.00034486615464916857, 0.0007829393781224368, 0.002684363582134069, 0.006384684214450824, 0.009302065468645142, 0.0268529565282231, 0.016432406233688763, 0.031382820073074344, 0.027486764596226978, 0.026014092908806203, 0.04829058235776601, 0.028586608008351354, 0.02455074192826784, 0.03979009768100813, 0.02231377227648945, 0.056502125121169186, 0.01015957050182686, 0.02736559540675565, 0.013151517411080456, 0.023795764670792634, 0.048066885392588174, 0.01441913354708821, 0.00965625233017672, 0.02471851465215122, 0.011492431586011483, 0.04164491835060771, 0.0020598762210126014, 0.01692640369845649, 0.005228916561031988, 0.008714860935053314, 0.032697039743494145, 0.01218216389530982, 0.004296845872790993, 0.015118186563268958, 0.0075497725747520695, 0.033097830139437776, 0.0015192752218328239, 0.012116918947132951, 0.0024886287376034598, 0.00496793676832451, 0.02751472671687421, 0.0035418686153157854, 0.001966669152188502, 0.011725449258071733, 0.00498657818208933, 0.028884870628588473, 0.0005312802922973678, 0.004501901424204011, 0.0015192752218328239, 0.0032342852881962567, 0.0173085526806353, 0.00241406308254418, 0.0011278055327716054, 0.0034952650809037355, 0.002209007531131161, 0.01961076728059056, 0.0004660353441204981, 0.002171724703601521, 0.0007736186712400269, 0.001491313101185594, 0.01430728506449929, 0.0009413913951234062, 0.000717694429945567, 0.0019107449108940423, 0.0016031615837745134, 0.009320706882409963, 0.0001211691894713295, 0.0015379166355976438, 0.0003728282752963985, 0.0005312802922973678, 0.01243382298113489, 0.00030758332711952873, 0.00034486615464916857, 0.0010159570501826858, 0.0010439191708299157, 0.0075497725747520695, 0.00015845201700096935, 0.0006617701886511073, 0.00021437625829542914, 0.00034486615464916857, 0.005927969577212736, 0.00040079039594362835, 0.00027962120647229886, 0.00045671463723808813, 0.0005592424129445977, 0.0058627246290358665, 8.388636194168966e-05, 0.00034486615464916857, 0.000251659085825069, 0.000251659085825069, 0.0034859443740213256, 0.00033554544776675865, 0.000242338378942659, 0.0004194318097084483, 0.0006338080680038774, 0.0051170680784430695, 0.0001211691894713295, 0.00016777272388337932, 0.00020505555141301916, 0.00013981060323614943, 0.0011837297740660653, 0.00013981060323614943, 0.00014913131011855938, 0.00023301767206024905, 0.00013048989635373946, 0.0016963686525986131, 5.592424129445977e-05, 0.000251659085825069, 0.0001211691894713295, 6.524494817686973e-05, 0.0010159570501826858, 7.456565505927969e-05, 9.320706882409962e-05, 0.00011184848258891954, 6.524494817686973e-05, 0.0022835731861904408, 1.8641413764819922e-05, 6.524494817686973e-05, 2.7962120647229885e-05, 6.524494817686973e-05, 0.002991946909253598, 4.660353441204981e-05, 6.524494817686973e-05, 0.0001211691894713295, 0.00010252777570650958, 0.0012769368428901648, 3.7282827529639845e-05, 0.00010252777570650958, 3.7282827529639845e-05, 2.7962120647229885e-05, 0.0010159570501826858, 2.7962120647229885e-05, 1.8641413764819922e-05, 7.456565505927969e-05, 7.456565505927969e-05, 0.0010439191708299157, 4.660353441204981e-05, 4.660353441204981e-05, 4.660353441204981e-05, 2.7962120647229885e-05, 0.0006058459473566475, 3.7282827529639845e-05, 3.7282827529639845e-05, 4.660353441204981e-05, 0.00014913131011855938, 0.002162403996719111, 1.8641413764819922e-05, 3.7282827529639845e-05, 2.7962120647229885e-05, 3.7282827529639845e-05, 0.0003169040340019387, 1.8641413764819922e-05, 9.320706882409961e-06, 1.8641413764819922e-05, 4.660353441204981e-05, 0.000484676757885318, 1.8641413764819922e-05, 2.7962120647229885e-05, 5.592424129445977e-05, 2.7962120647229885e-05, 0.0003262247408843487, 3.7282827529639845e-05, 2.7962120647229885e-05, 4.660353441204981e-05, 0.00010252777570650958, 0.0003169040340019387, 1.8641413764819922e-05, 0.0, 0.0, 1.8641413764819922e-05, 0.000717694429945567, 9.320706882409961e-06, 0.0, 0.0, 6.524494817686973e-05, 0.00027962120647229886, 9.320706882409961e-06, 0.0, 9.320706882409961e-06, 1.8641413764819922e-05, 0.00017709343076578927, 0.0, 1.8641413764819922e-05, 1.8641413764819922e-05, 9.320706882409961e-06, 0.000242338378942659, 9.320706882409961e-06, 0.0, 1.8641413764819922e-05, 9.320706882409961e-06, 0.000242338378942659, 1.8641413764819922e-05, 1.8641413764819922e-05, 9.320706882409961e-06, 7.456565505927969e-05, 0.0008202222056520766, 0.0, 9.320706882409961e-06, 9.320706882409961e-06, 1.8641413764819922e-05, 9.320706882409961e-06, 9.320706882409961e-06, 9.320706882409961e-06, 1.8641413764819922e-05, 9.320706882409961e-06, 0.00018641413764819924, 0.0, 9.320706882409961e-06, 0.0, 1.8641413764819922e-05, 7.456565505927969e-05, 9.320706882409961e-06, 0.0, 0.0, 1.8641413764819922e-05, 9.320706882409962e-05, 0.0, 9.320706882409961e-06, 0.0, 1.8641413764819922e-05, 0.00038214898217880846, 9.320706882409961e-06, 3.7282827529639845e-05, 0.0, 9.320706882409961e-06, 0.00010252777570650958, 9.320706882409961e-06, 0.0, 0.0, 9.320706882409961e-06, 0.0001211691894713295, 2.7962120647229885e-05, 9.320706882409961e-06, 9.320706882409961e-06, 0.0, 0.00013048989635373946, 0.0, 9.320706882409961e-06, 1.8641413764819922e-05, 0.0, 2.7962120647229885e-05, 0.0, 9.320706882409961e-06, 1.8641413764819922e-05, 4.660353441204981e-05, 0.0004380732234732682, 0.0, 9.320706882409961e-06, 9.320706882409961e-06, 0.0, 6.524494817686973e-05, 0.0, 9.320706882409961e-06, 9.320706882409961e-06, 1.8641413764819922e-05, 0.00015845201700096935, 0.0, 2.7962120647229885e-05, 0.0, 0.0, 1.8641413764819922e-05, 0.0, 0.0, 0.0, 9.320706882409961e-06, 3.7282827529639845e-05, 0.0, 9.320706882409961e-06, 9.320706882409961e-06, 0.0, 0.0001211691894713295, 9.320706882409961e-06, 0.0, 0.0, 3.7282827529639845e-05, 4.660353441204981e-05, 9.320706882409961e-06, 9.320706882409961e-06, 0.0, 0.0, 1.8641413764819922e-05, 2.7962120647229885e-05, 0.0, 9.320706882409961e-06, 0.0, 0.00010252777570650958, 0.0, 9.320706882409961e-06, 9.320706882409961e-06, 0.0, 2.7962120647229885e-05, 0.0, 0.0, 0.0, 0.0003728282752963985], "points": [80.0, 81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0, 100.0], "points_dist": [0.0035605100290806053, 0.006086421594213705, 0.015696070389978375, 0.02519387070315413, 0.051879054507493846, 0.0742953545596898, 0.0987062858847215, 0.1329412422638133, 0.1327641488330475, 0.09060659160390724, 0.11546491685929461, 0.0857038997837596, 0.07195585713220491, 0.04847699649541421, 0.028586608008351354, 0.011445828051599433, 0.003933338304377004, 0.0016963686525986131, 0.0006058459473566475, 0.000242338378942659, 0.00015845201700096935]}, {"dataset": "23k", "prices": [4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0, 81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0, 100.0, 101.0, 102.0, 103.0, 104.0, 105.0, 106.0, 107.0, 108.0, 109.0, 110.0, 111.0, 112.0, 113.0, 114.0, 115.0, 116.0, 117.0, 118.0, 119.0, 120.0, 121.0, 122.0, 123.0, 124.0, 125.0, 126.0, 127.0, 128.0, 129.0, 130.0, 131.0, 132.0, 133.0, 134.0, 135.0, 136.0, 137.0, 138.0, 139.0, 140.0, 141.0, 142.0, 143.0, 144.0, 145.0, 146.0, 147.0, 148.0, 149.0, 150.0, 151.0, 152.0, 153.0, 154.0, 155.0, 156.0, 157.0, 158.0, 159.0, 160.0, 161.0, 162.0, 163.0, 164.0, 165.0, 166.0, 167.0, 168.0, 169.0, 170.0, 171.0, 172.0, 173.0, 174.0, 175.0, 176.0, 177.0, 178.0, 179.0, 180.0, 181.0, 182.0, 183.0, 184.0, 185.0, 186.0, 187.0, 188.0, 189.0, 190.0, 191.0, 192.0, 193.0, 194.0, 195.0, 196.0, 197.0, 198.0, 199.0, 200.0, 201.0, 202.0, 203.0, 204.0, 205.0, 206.0, 207.0, 208.0, 209.0, 210.0, 211.0, 212.0, 213.0, 214.0, 215.0, 216.0, 217.0, 218.0, 219.0, 220.0, 221.0, 222.0, 223.0, 224.0, 225.0, 226.0, 227.0, 228.0, 229.0, 230.0, 231.0, 232.0, 233.0, 234.0, 235.0, 236.0, 237.0, 238.0, 239.0, 240.0, 241.0, 242.0, 243.0, 244.0, 245.0, 246.0, 247.0, 248.0, 249.0, 250.0, 251.0, 252.0, 253.0, 254.0, 255.0, 256.0, 257.0, 258.0, 259.0, 260.0, 261.0, 262.0, 263.0, 264.0, 265.0, 266.0, 267.0, 268.0, 269.0, 270.0, 271.0, 272.0, 273.0, 274.0, 275.0, 276.0, 277.0, 278.0, 279.0, 280.0, 281.0, 282.0, 283.0, 284.0, 285.0, 286.0, 287.0, 288.0, 289.0, 290.0, 291.0, 292.0, 293.0, 294.0, 295.0, 296.0, 297.0, 298.0, 299.0], "prices_dist": [0.0002116133401049602, 0.0005501946842728965, 0.0013120027086507534, 0.0034281361097003556, 0.009480277636702217, 0.01532080582359912, 0.03995259861181649, 0.023065854071440663, 0.04181479600474014, 0.038217369222955815, 0.03208058235991197, 0.0627645166751312, 0.032630777044184864, 0.03161503301168106, 0.04003724394785847, 0.027425088877602845, 0.06289148467919417, 0.012527509734213646, 0.02649399018114102, 0.015151515151515152, 0.019341459285593363, 0.04355002539360081, 0.012739123074318605, 0.010665312341289994, 0.016844421872354833, 0.010876925681394955, 0.03711697985441002, 0.003004909429490435, 0.010538344337227019, 0.005671237514812934, 0.005840528186896902, 0.02611308616895209, 0.007491112239715591, 0.0043592348061621804, 0.008252920264093449, 0.00558659217877095, 0.026578635517183005, 0.0011850347045877772, 0.006517690875232775, 0.002793296089385475, 0.0033858134416793633, 0.020822752666328086, 0.0026240054173015067, 0.001946842728965634, 0.004951752158456069, 0.0045708481462671405, 0.023277467411545624, 0.0004655493482309125, 0.003301168105637379, 0.002200778737091586, 0.0023700694091755544, 0.011554088369730828, 0.0018198747249026578, 0.0013966480446927375, 0.0024547147452175385, 0.0017775520568816658, 0.0170137125444388, 0.0005925173522938886, 0.00207381073302861, 0.0008464533604198408, 0.001100389368545793, 0.010834603013373963, 0.0007618080243778568, 0.0007194853563568648, 0.0011850347045877772, 0.0018198747249026578, 0.009395632300660234, 8.464533604198409e-05, 0.0011850347045877772, 0.0006771626883358727, 0.0005925173522938886, 0.009057050956492297, 0.0004655493482309125, 0.0008041306923988488, 0.000973421364482817, 0.0014389707127137295, 0.007364144235652616, 0.00025393600812595224, 0.0006771626883358727, 0.0004232266802099204, 0.0002962586761469443, 0.004189944134078212, 0.0004232266802099204, 0.0005078720162519045, 0.0005925173522938886, 0.0006771626883358727, 0.007279498899610631, 4.2322668020992044e-05, 0.0003809040121889284, 0.0002962586761469443, 0.0002962586761469443, 0.0031318774335534114, 0.0004232266802099204, 0.0005078720162519045, 0.0004232266802099204, 0.0006348400203148807, 0.0052480108346030134, 0.00012696800406297612, 0.00025393600812595224, 0.0003809040121889284, 0.00025393600812595224, 0.0012696800406297613, 0.00012696800406297612, 0.00016929067208396818, 0.00033858134416793635, 0.00025393600812595224, 0.0016082613847976975, 8.464533604198409e-05, 0.0005501946842728965, 8.464533604198409e-05, 0.00012696800406297612, 0.0011427120365667851, 8.464533604198409e-05, 4.2322668020992044e-05, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.0027509734213644827, 0.0, 8.464533604198409e-05, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.0022431014051125784, 0.0, 0.0002116133401049602, 0.00016929067208396818, 0.0002116133401049602, 0.0015236160487557136, 8.464533604198409e-05, 0.0002116133401049602, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.0008887760284408329, 4.2322668020992044e-05, 0.0, 0.00016929067208396818, 4.2322668020992044e-05, 0.0012273573726087692, 8.464533604198409e-05, 0.00012696800406297612, 0.00012696800406297612, 0.00012696800406297612, 0.0005078720162519045, 8.464533604198409e-05, 8.464533604198409e-05, 8.464533604198409e-05, 0.0002116133401049602, 0.0017775520568816658, 4.2322668020992044e-05, 0.00012696800406297612, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.00025393600812595224, 4.2322668020992044e-05, 0.0, 0.0, 4.2322668020992044e-05, 0.0004232266802099204, 0.0, 8.464533604198409e-05, 8.464533604198409e-05, 4.2322668020992044e-05, 0.0005501946842728965, 4.2322668020992044e-05, 4.2322668020992044e-05, 8.464533604198409e-05, 0.00012696800406297612, 0.0002962586761469443, 4.2322668020992044e-05, 0.0, 0.0, 4.2322668020992044e-05, 0.0008887760284408329, 4.2322668020992044e-05, 0.0, 0.0, 8.464533604198409e-05, 0.0003809040121889284, 4.2322668020992044e-05, 0.0, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.00016929067208396818, 0.0, 4.2322668020992044e-05, 8.464533604198409e-05, 4.2322668020992044e-05, 0.0002962586761469443, 0.0, 0.0, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.0002116133401049602, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.0, 8.464533604198409e-05, 0.000973421364482817, 0.0, 0.0, 0.0, 4.2322668020992044e-05, 0.0, 0.0, 0.0, 0.0, 0.0, 0.00025393600812595224, 0.0, 4.2322668020992044e-05, 0.0, 4.2322668020992044e-05, 0.00025393600812595224, 0.0, 0.0, 0.0, 8.464533604198409e-05, 0.0002116133401049602, 0.0, 0.0, 0.0, 0.0, 0.0003809040121889284, 0.0, 8.464533604198409e-05, 0.0, 0.0, 0.0002116133401049602, 0.0, 0.0, 0.0, 0.0, 0.00012696800406297612, 8.464533604198409e-05, 0.0, 0.0, 0.0, 8.464533604198409e-05, 0.0, 0.0, 4.2322668020992044e-05, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0004232266802099204, 0.0, 0.0, 0.0, 0.0, 0.00012696800406297612, 0.0, 0.0, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.00012696800406297612, 0.0, 4.2322668020992044e-05, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.464533604198409e-05, 0.0, 0.0, 0.0, 0.0, 0.00016929067208396818, 4.2322668020992044e-05, 0.0, 0.0, 8.464533604198409e-05, 0.0, 4.2322668020992044e-05, 4.2322668020992044e-05, 0.0, 0.0, 0.0, 8.464533604198409e-05, 0.0, 4.2322668020992044e-05, 0.0, 8.464533604198409e-05, 0.0, 4.2322668020992044e-05, 0.0, 0.0, 4.2322668020992044e-05, 0.0, 0.0, 0.0, 0.0004655493482309125], "points": [80.0, 81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0, 100.0], "points_dist": [0.004528525478246149, 0.006686981547316743, 0.014008803114948367, 0.028059928897917724, 0.05764347384459116, 0.08189436262061961, 0.10597596072456408, 0.1446588792957508, 0.13357034027425088, 0.09954291518537328, 0.1084729981378026, 0.07491112239715592, 0.05942102590147283, 0.04261892669713899, 0.02200778737091586, 0.009903504316912138, 0.0031318774335534114, 0.00186219739292365, 0.0005078720162519045, 0.00025393600812595224, 0.00033858134416793635]}, {"dataset": "5k", "prices": [4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0, 81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0, 100.0, 101.0, 102.0, 103.0, 104.0, 105.0, 106.0, 107.0, 108.0, 109.0, 110.0, 111.0, 112.0, 113.0, 114.0, 115.0, 116.0, 117.0, 118.0, 119.0, 120.0, 121.0, 122.0, 123.0, 124.0, 125.0, 126.0, 127.0, 128.0, 129.0, 130.0, 131.0, 132.0, 133.0, 134.0, 135.0, 136.0, 137.0, 138.0, 139.0, 140.0, 141.0, 142.0, 143.0, 144.0, 145.0, 146.0, 147.0, 148.0, 149.0, 150.0, 151.0, 152.0, 153.0, 154.0, 155.0, 156.0, 157.0, 158.0, 159.0, 160.0, 161.0, 162.0, 163.0, 164.0, 165.0, 166.0, 167.0, 168.0, 169.0, 170.0, 171.0, 172.0, 173.0, 174.0, 175.0, 176.0, 177.0, 178.0, 179.0, 180.0, 181.0, 182.0, 183.0, 184.0, 185.0, 186.0, 187.0, 188.0, 189.0, 190.0, 191.0, 192.0, 193.0, 194.0, 195.0, 196.0, 197.0, 198.0, 199.0, 200.0, 201.0, 202.0, 203.0, 204.0, 205.0, 206.0, 207.0, 208.0, 209.0, 210.0, 211.0, 212.0, 213.0, 214.0, 215.0, 216.0, 217.0, 218.0, 219.0, 220.0, 221.0, 222.0, 223.0, 224.0, 225.0, 226.0, 227.0, 228.0, 229.0, 230.0, 231.0, 232.0, 233.0, 234.0, 235.0, 236.0, 237.0, 238.0, 239.0, 240.0, 241.0, 242.0, 243.0, 244.0, 245.0, 246.0, 247.0, 248.0, 249.0, 250.0, 251.0, 252.0, 253.0, 254.0, 255.0, 256.0, 257.0, 258.0, 259.0, 260.0, 261.0, 262.0, 263.0, 264.0, 265.0, 266.0, 267.0, 268.0, 269.0, 270.0, 271.0, 272.0, 273.0, 274.0, 275.0, 276.0, 277.0, 278.0, 279.0, 280.0, 281.0, 282.0, 283.0, 284.0, 285.0, 286.0, 287.0, 288.0, 289.0, 290.0, 291.0, 292.0, 293.0, 294.0, 295.0, 296.0, 297.0, 298.0, 299.0], "prices_dist": [0.0001953125, 0.000390625, 0.0009765625, 0.0033203125, 0.00859375, 0.01640625, 0.04140625, 0.022265625, 0.0427734375, 0.03125, 0.0396484375, 0.06640625, 0.033984375, 0.0294921875, 0.03671875, 0.0263671875, 0.0583984375, 0.012109375, 0.023828125, 0.018359375, 0.02109375, 0.0396484375, 0.01171875, 0.011328125, 0.0142578125, 0.009375, 0.03671875, 0.0033203125, 0.011328125, 0.007421875, 0.005078125, 0.0265625, 0.009375, 0.00390625, 0.0078125, 0.0056640625, 0.0271484375, 0.0015625, 0.0072265625, 0.002734375, 0.002734375, 0.023046875, 0.001953125, 0.0021484375, 0.00546875, 0.003515625, 0.023828125, 0.0009765625, 0.003125, 0.0015625, 0.002734375, 0.012890625, 0.001171875, 0.0013671875, 0.001953125, 0.0015625, 0.0181640625, 0.0005859375, 0.0017578125, 0.001953125, 0.001171875, 0.0103515625, 0.00078125, 0.0017578125, 0.001953125, 0.0021484375, 0.0080078125, 0.0, 0.0009765625, 0.0005859375, 0.0005859375, 0.010546875, 0.0, 0.00078125, 0.0013671875, 0.0025390625, 0.0056640625, 0.0001953125, 0.000390625, 0.0, 0.0009765625, 0.003515625, 0.0001953125, 0.0001953125, 0.000390625, 0.00078125, 0.00703125, 0.000390625, 0.000390625, 0.000390625, 0.000390625, 0.004296875, 0.0005859375, 0.0, 0.0001953125, 0.0013671875, 0.0056640625, 0.0001953125, 0.0001953125, 0.0001953125, 0.000390625, 0.00078125, 0.0001953125, 0.0001953125, 0.0, 0.000390625, 0.00234375, 0.0, 0.000390625, 0.000390625, 0.0001953125, 0.0009765625, 0.0, 0.0, 0.0001953125, 0.0001953125, 0.0044921875, 0.0, 0.0001953125, 0.0, 0.0, 0.001953125, 0.0001953125, 0.0, 0.0, 0.0001953125, 0.0013671875, 0.0, 0.0005859375, 0.0, 0.0, 0.00078125, 0.0, 0.0, 0.0, 0.0, 0.0013671875, 0.0, 0.0, 0.0001953125, 0.0, 0.0, 0.0001953125, 0.0, 0.0001953125, 0.0, 0.001953125, 0.0, 0.0, 0.0, 0.0, 0.000390625, 0.0, 0.0, 0.0, 0.0, 0.000390625, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0001953125, 0.0, 0.0, 0.000390625, 0.000390625, 0.0, 0.0, 0.0, 0.000390625, 0.0001953125, 0.0, 0.0, 0.0, 0.000390625, 0.00078125, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0001953125, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.001171875, 0.0, 0.0, 0.0, 0.0001953125, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.000390625, 0.0, 0.0, 0.0, 0.0, 0.0009765625, 0.0, 0.0, 0.0, 0.0, 0.000390625, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0, 0.0001953125, 0.0, 0.0, 0.0001953125, 0.0, 0.0, 0.0, 0.0001953125, 0.000390625, 0.0, 0.0001953125, 0.0, 0.0, 0.000390625, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0001953125, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0, 0.0, 0.0, 0.0, 0.0001953125, 0.0, 0.0, 0.0, 0.000390625], "points": [80.0, 81.0, 82.0, 83.0, 84.0, 85.0, 86.0, 87.0, 88.0, 89.0, 90.0, 91.0, 92.0, 93.0, 94.0, 95.0, 96.0, 97.0, 98.0, 99.0, 100.0], "points_dist": [0.0033203125, 0.0064453125, 0.0169921875, 0.0263671875, 0.05546875, 0.0783203125, 0.10390625, 0.1337890625, 0.143359375, 0.0994140625, 0.1087890625, 0.0787109375, 0.065625, 0.0412109375, 0.0234375, 0.0099609375, 0.002734375, 0.00078125, 0.0009765625, 0.000390625, 0.0]}]