var bottlesLeft = 99;
            while (bottlesLeft > 1) {
                console.log (bottlesLeft + " bottles of beer on the wall, " + bottlesLeft +" bottles of beer.");
                bottlesLeft = bottlesLeft -1;
                if (bottlesLeft > 1) {
                    console.log (" And if one of those bottles should have to fall there would be " + bottlesLeft + " bottles of beer on the wall. <br><br>");
                }
                else {
                    console.log (" And if one of those bottles should have to fall there would be " + bottlesLeft + " bottle of beer on the wall. <br><br>");
                }
            }
            if (bottlesLeft == 1) {
                console.log (bottlesLeft + " bottle of beer on the wall, " + bottlesLeft +" bottle of beer.");
                bottlesLeft = bottlesLeft -1;
                console.log (" And if that bottle should have to fall there would be no more bottles of beer on the wall. <br><br>");
            }