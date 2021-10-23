<!--    Filename:   category-pages-xslt.xsl
        Author:     Jaydon Cameron
        Validator:  https://www.online-toolz.com/tools/xslt-validator-tester-online.php
        Created:    10/10/2021      -->

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="utf-8" indent="yes" version="1.0"/>

    <xsl:template match="car_list">
        <html lang="en">
            <head>
                <link rel="stylesheet" href="../style.css" type="text/css"/>

                <title>Our <xsl:value-of select="car/make"/> Range</title>
                <style>
                    h2 {
                        text-align: left;
                    }
                    .vList li {
                        display: inline-block;
                        margin: 8%;
                    }
                    .vList {
                        display: block;
                    }
                </style>
            </head>

            <body>
                <header>
                    <div class="container">
                        <img src="../images/logowhite.png" alt="logo" class="logo" height="70"/>
                            <nav id="TopNav">
                                <ul>
                                    <li><a href="../index.html">Home</a></li>
                                    <li><a href="Collection%20Page/form.html">List a Car</a></li>
                                    <li><a href="category_2_Volkswagen.xml">Volkswagen</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                </ul>
                        </nav>
                    </div>
                </header>

                <section class="homepage showcase" style="width: 100%;">
                    <h1>Our <xsl:value-of select="car/make"/> Range</h1>
                    <br/>
                    <ul>
                        <xsl:for-each select="car">
                            <xsl:sort select="make"/>
                            <li>
                                <xsl:apply-templates select="."/>
                            </li>
                        </xsl:for-each>
                    </ul>
                </section>


                <footer>
                    <ul id="footerLinks">
                        <li>
                            <div id="copyrightStatement">
                                <xsl:text>&#169; Jim's Cars 2021 All Rights Reserved</xsl:text>
                            </div>
                        </li>

                        <li>
                            <a href="../privacy-policy.html">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="../terms-and-conditions.html">Terms and Conditions</a>
                        </li>

                        <li>
                            <a href="../contact-us.html">Contact Us</a>
                        </li>

                    </ul>
                    <address class="copyright">
                        Jaydon Cameron <br/>
                        <a href="mailto:C3329145@uon.edu.au">C3329145@uon.edu.au</a> <br/>
                        SENG1050 - Assignment 2
                    </address>
                </footer>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="car">
        <h2>
            <xsl:value-of select="make"/> <xsl:text> </xsl:text> <xsl:value-of select="model"/>
        </h2>
        <img src="{promoPicFile}" alt="promopic" style=" margin-left: 0; margin-right: 20px; width: 50%;"/>
        <p><xsl:value-of select="description"/></p>
        <a href="{externalPromoPage}">Visit their website!</a>
        <br/>
        <p>
            <span style="font-weight: bold;"><xsl:text>Cost: </xsl:text></span>
            <xsl:text>$</xsl:text>
            <xsl:value-of select="cost"/>
            <br/><br/>
            <span style="font-weight: bold;"><xsl:text>    Safety Rating: </xsl:text></span>
            <xsl:value-of select="safetyRating/@stars"/>
            <xsl:text>&#160;stars</xsl:text>
        </p> <br/>
        <p style="font-weight: bold; margin-bottom: 1px; margin-top: 30%;">Specs</p>
        <ul class="vList">
            <li>
                <xsl:text>Type:&#160;</xsl:text>
                <xsl:value-of select="specs/type"/>
            </li>
            <li>
                <xsl:text>Range: </xsl:text>
                <xsl:value-of select="specs/range"/>
            </li>
            <li>
                <xsl:text>Top Speed:&#160;</xsl:text>
                <xsl:value-of select="specs/topSpeed"/>
            </li>
            <li>
                <xsl:text>0 to 100 kph:&#160;</xsl:text>
                <xsl:value-of select="specs/zeroToHundred"/>
            </li>
        </ul>
        <br/>
        <p style="font-weight: bold; margin-bottom: 1px;">Extras</p>
        <ul class="vList">
            <xsl:for-each select="extras">
                <li>
                    <xsl:apply-templates select="."/>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <xsl:template match="extras">
        <p>
            <xsl:text>Option:&#160;&#160;</xsl:text>
            <xsl:value-of select="option"/><br/>
            <xsl:text>,&#160;&#160;&#160;Price:&#160;&#160;</xsl:text>
            <xsl:value-of select="additionalCost"/><br/><br/>
        </p>
    </xsl:template>

</xsl:stylesheet>