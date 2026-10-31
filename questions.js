const QUESTIONS = [
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A worker grips an energized conductor and finds that the hand muscles clamp shut so that the conductor cannot be released. What is the name of the current level at which this begins?",
    "options": {
      "A": "Perception threshold, the lowest current a person can notice as a faint tingle",
      "B": "Ground-fault threshold, the current at which a protective device opens the circuit",
      "C": "Arc-flash threshold, the current at which air between two conductors becomes ionized",
      "D": "Let-go threshold, the current above which muscles cannot release the conductor"
    },
    "answer": "D",
    "explanation": "The let-go threshold, roughly 10 to 20 milliamperes, is the point where involuntary muscle contraction keeps the hand on the conductor. The perception threshold is far lower, about 1 milliampere, and produces only a faint tingle that the person can easily pull away from. A ground-fault threshold belongs to protective devices such as GFCIs, which trip at about 4 to 6 milliamperes, and it describes a device setting, not a body response. Arc ionization depends on voltage and gap distance and has nothing to do with muscle response in a hand.",
    "id": 1
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A technician with wet hands creates a hand-to-hand path of 2,000 ohms across a 120 volt circuit. What current flows through the body?",
    "options": {
      "A": "About 60 mA, which is in the range that may cause ventricular fibrillation",
      "B": "About 6 mA, a mild tingle that most adults can easily release from at once",
      "C": "About 600 mA, high enough that a breaker would always trip before any injury occurs",
      "D": "About 0.6 mA, barely perceptible and entirely harmless to a healthy adult worker"
    },
    "answer": "A",
    "explanation": "Current equals voltage divided by resistance, so 120 divided by 2,000 gives 0.06 ampere, or 60 milliamperes. That value is within the range, roughly 50 to 100 milliamperes, where the heart can go into fibrillation if the path crosses the chest. A result of 6 milliamperes comes from misplacing the decimal point by a factor of ten. A result of 600 milliamperes is ten times too large, and breakers do not protect people anyway because they trip at many amperes. The 0.6 milliampere figure is a hundred times too small.",
    "id": 2
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "An electrician has opened and locked the disconnect for a pump motor and attached a tag. Which action must come next, before touching any of the motor conductors?",
    "options": {
      "A": "Briefly start the pump from its control station to see whether anything moves",
      "B": "Ask a coworker whether they remember which disconnect was switched off earlier",
      "C": "Test the conductors with a rated meter that is proven on a known live source",
      "D": "Rely on the label printed on the disconnect handle since labels are kept current"
    },
    "answer": "C",
    "explanation": "After isolation and locking, the circuit must be verified dead with a properly rated meter, tested on a known source before and after the check. Trying the start controls is part of the procedure, but it only shows the machine does not run and does not prove the conductors have no voltage, since a second source could feed them. Memory from a coworker is not evidence. Labels can be wrong or outdated, and feeders sometimes come from sources no one recorded.",
    "id": 3
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "Why are leather protector gloves worn over rubber insulating gloves when an electrician works near live parts?",
    "options": {
      "A": "The leather supplies most of the dielectric strength that protects the hand from voltage",
      "B": "The leather improves grip on wet conductors, which is a requirement of the glove voltage class",
      "C": "The leather carries any leakage current away from the wearer's hand toward the nearby ground",
      "D": "The leather shields the rubber from cuts and punctures that would break the insulation"
    },
    "answer": "D",
    "explanation": "The rubber glove provides the insulation, and its weak point is physical damage. A cut, scrape, or puncture can open a path for current, so the leather outer glove protects the rubber from mechanical harm. Leather adds very little dielectric strength and is not the part rated for voltage. Grip is a side benefit but not the reason, and no glove standard ties the leather to grip. Leather is not designed to conduct leakage current anywhere; routing current is not its purpose, and that would be unsafe.",
    "id": 4
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "While you are working in a service room, a coworker is frozen against an energized panel and cannot let go. What is the best first action?",
    "options": {
      "A": "Grab the coworker's shirt or arm and pull the body away from the panel right away",
      "B": "Pour water over the contact point to cool the burns while waiting for the ambulance",
      "C": "Cut power at the nearest safe disconnect if possible, then call emergency services",
      "D": "Begin chest compressions right away while the coworker is still touching the energized panel"
    },
    "answer": "C",
    "explanation": "Removing the power stops the current without putting a second person into the circuit, and emergency services should be called immediately. Grabbing the clothing or body can pass current through the rescuer, particularly if the clothing is damp. Water conducts and adds a new path for current, so it increases danger for both people. Compressions cannot be given safely while the victim is still part of a live circuit, and the rescuer must not touch the victim until the source is off or the victim is cleared with a dry nonconductive tool.",
    "id": 5
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A worker's wet hands give a 1,200 ohm hand-to-hand path across a 120 volt source. How much current flows through the chest?",
    "options": {
      "A": "100 mA, well above the level that can cause ventricular fibrillation",
      "B": "10 mA, near the let-go threshold but still safely below any fibrillation level",
      "C": "1,000 mA, more than a standard 15 ampere breaker would carry before it trips",
      "D": "10 A, found by dividing the resistance by the voltage instead of the reverse"
    },
    "answer": "A",
    "explanation": "Using current equals voltage divided by resistance, 120 divided by 1,200 equals 0.1 ampere, or 100 milliamperes. That exceeds the roughly 50 milliampere level at which fibrillation becomes possible. Ten milliamperes would require a resistance of 12,000 ohms. A value of 1,000 milliamperes would need only 120 ohms, and it is also incorrect because 1 ampere is far below a 15 ampere breaker rating. Ten amperes comes from inverting the formula, dividing resistance by voltage, which gives a meaningless number.",
    "id": 6
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "An electrician needs a multimeter for measuring voltage inside a 480 volt motor control center. Which meter choice is most appropriate?",
    "options": {
      "A": "A CAT II meter with a 300 volt rating and unshielded alligator clips on the leads",
      "B": "A CAT III meter rated above the system voltage, with finger-guarded leads",
      "C": "A non-contact voltage pen used as the only proof that the bus is truly dead",
      "D": "A hobby meter with no category marking but a bright display and very long leads"
    },
    "answer": "B",
    "explanation": "Motor control centers are distribution-level equipment, so the meter needs a CAT III or CAT IV listing and a voltage rating higher than the system, with finger-guarded leads. A CAT II meter is meant for plug-in loads, and a 300 volt rating is below 480 volts. A non-contact pen can miss voltage in shielded cable or with a weak battery, so it supports a rated meter but cannot replace it. A meter without a category marking has no tested protection against fault energy and should not be used on panels.",
    "id": 7
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "A small fire starts inside an energized lighting panel in a hallway. What is the correct response?",
    "options": {
      "A": "Throw a bucket of water on the panel to put out the flames as quickly as possible",
      "B": "Spray the fire with a foam extinguisher while standing directly in front of the panel",
      "C": "Open the panel door fully so smoke can leave and the heat can escape the enclosure",
      "D": "Shut off the supply if safe, use an electrical-rated extinguisher, and call for help"
    },
    "answer": "D",
    "explanation": "Removing power takes away the energy feeding the fire, and a carbon dioxide or dry chemical extinguisher is made for electrical fires. If the fire is not controlled in seconds, people should leave and call the fire department. Water and foam are conductive and can carry current back to the person holding the container, so they are not suitable for live equipment. Opening the panel door fully adds air that feeds the fire and exposes the worker to arc flash and flying material.",
    "id": 8
  },
  {
    "domain": "safety",
    "chapter": 1,
    "question": "What is the minimum clear working space in front of a 120/240 volt residential load center under the NEC, including depth, width, and headroom?",
    "options": {
      "A": "24 inches deep, 24 inches wide, and 6 feet of headroom above the floor",
      "B": "36 inches deep, 30 inches wide, and 6.5 feet of headroom",
      "C": "48 inches deep, 36 inches wide, and 7 feet of headroom above the floor",
      "D": "36 inches deep, 20 inches wide, and only 5 feet of headroom above the floor"
    },
    "answer": "B",
    "explanation": "For equipment of 600 volts or less with voltage to ground at 150 volts or less, the clear depth is 3 feet (36 inches), the width is 30 inches or the equipment width if greater, and the headroom is at least 6.5 feet. A depth of 24 inches is less than the minimum, and 6 feet of headroom would fall short as well. A 48 inch depth applies to higher voltage conditions in some cases, so it is more than needed here. A 20 inch width and 5 feet of headroom would not let a worker move safely.",
    "id": 9
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "Which particle moves through a copper wire when an electric current is flowing, and what is its charge?",
    "options": {
      "A": "Proton, a positively charged particle that is locked inside the atomic nucleus",
      "B": "Neutron, an uncharged particle that is shared between neighboring copper atoms",
      "C": "Electron, a negatively charged particle found outside the nucleus of the atom",
      "D": "Nucleus, a positively charged cluster that drifts along the wire when voltage is applied"
    },
    "answer": "C",
    "explanation": "In a metal conductor, the moving charge carriers are free electrons, which carry a negative charge and sit in the outer region of the atom. Protons are positive but are held in the nucleus by strong forces and do not travel along a wire. Neutrons carry no charge, so they cannot make up a current. The nucleus as a whole stays fixed in the metal's structure, so it does not drift when voltage is applied.",
    "id": 10
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "How many valence electrons does a neutral copper atom have, and what does that mean for its behavior?",
    "options": {
      "A": "Four, which gives it the stable bonding pattern used in semiconductor chips",
      "B": "Eight, a full outer shell that makes copper a very poor conductor",
      "C": "Three, the same as aluminum, so the two metals behave exactly the same",
      "D": "One, a loosely held electron that is easily freed to move as current"
    },
    "answer": "D",
    "explanation": "Copper has a single electron in its outermost shell, and since it is far from the nucleus and weakly held, it breaks free easily, making copper a good conductor. Four valence electrons describes silicon and carbon, which are semiconductors or insulating solids. A full shell of eight describes inert gases such as neon, which do not conduct. Aluminum has three valence electrons, and although it conducts, it does so about 60 percent as well as copper, so the two are not identical.",
    "id": 11
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "A charger supplies a steady 4 amperes to a battery for 30 seconds. How much charge has moved into the battery?",
    "options": {
      "A": "7.5 coulombs, found by dividing the time by the current in the formula",
      "B": "120 coulombs, found by multiplying the current by the time",
      "C": "34 coulombs, found by adding the current and the time together",
      "D": "0.133 coulombs, found by dividing the current by the time elapsed"
    },
    "answer": "B",
    "explanation": "Charge equals current multiplied by time, so 4 amperes for 30 seconds gives 120 coulombs, since one ampere is one coulomb each second. Dividing time by current gives 7.5, which has units of seconds per ampere and is not a charge. Adding the two numbers mixes unlike units and has no physical meaning. Dividing current by time yields 0.133 ampere per second, which describes a rate of change in current rather than a quantity of charge.",
    "id": 12
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "An electrician draws a circuit with an arrow showing current leaving the positive battery terminal, passing through the load, and returning to the negative terminal. Which convention is this?",
    "options": {
      "A": "Conventional current flow, which treats current as moving from positive toward negative",
      "B": "Electron flow, which shows electrons moving from the positive terminal toward the negative",
      "C": "Alternating flow, which reverses the direction of the arrow every half cycle",
      "D": "Static flow, which shows charge sitting on the surface of the load"
    },
    "answer": "A",
    "explanation": "Conventional current flow shows current leaving the positive terminal and returning to the negative terminal, and this is the common drawing style in schematics and codes. Electron flow is the opposite direction, because electrons leave the negative terminal and travel toward the positive one. Alternating flow is a property of AC supplies and is not what a battery-fed circuit shows. Static means charge that is not moving, so it does not describe a drawing of current through a load.",
    "id": 13
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "A static test passes 2 coulombs of charge through a lead. About how many electrons is this, given that 1 coulomb equals 6.24 × 10^18 electrons?",
    "options": {
      "A": "About 6.24 × 10^18 electrons, the number in one coulomb",
      "B": "About 3.12 × 10^18 electrons, found by dividing the number by two",
      "C": "About 1.25 × 10^19 electrons, found by multiplying the number by two",
      "D": "About 1.25 × 10^18 electrons, found by shifting the decimal point incorrectly"
    },
    "answer": "C",
    "explanation": "Two coulombs hold twice as many electrons as one coulomb, so 2 × 6.24 × 10^18 equals 12.48 × 10^18, which is written as about 1.25 × 10^19. The value of 6.24 × 10^18 ignores the factor of two and gives the count for a single coulomb. Dividing by two halves the count instead of doubling it. The value of 1.25 × 10^18 is ten times too small, because moving the decimal point one place the wrong way changes the power of ten.",
    "id": 14
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "Which description best defines one ampere of current?",
    "options": {
      "A": "One joule of energy delivered to a load during each second of operation",
      "B": "One coulomb of charge passing a given point each second",
      "C": "One volt of push applied across one ohm of opposition in a circuit",
      "D": "One electron passing a given point in one full second of time"
    },
    "answer": "B",
    "explanation": "The ampere is the rate of flow of charge, and one ampere equals one coulomb passing a point in one second. Energy delivered at one joule per second is a watt, which measures power. A volt across an ohm does produce one ampere, but that is a statement of Ohm's law and not the definition of the unit. A single electron per second would be an almost unmeasurably small current, about 1.6 × 10^-19 ampere.",
    "id": 15
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "A rubber rod is rubbed with a wool cloth, and electrons move from the wool to the rod. What charge does each object now have?",
    "options": {
      "A": "Rod positive and wool negative, because the wool gained electrons",
      "B": "Rod positive and wool positive, because friction creates charge",
      "C": "Rod negative and wool positive, because electrons left the wool",
      "D": "Both neutral, because the transfer cancels out within the pair"
    },
    "answer": "C",
    "explanation": "The rod gained electrons, so it is negative, and the wool lost electrons, so it is positive. The reversed-sign answer has the electron transfer going the wrong way. Friction does not create charge, since it only moves electrons from one object to another, and the two objects end up with opposite charges. The pair together stays neutral overall, but each object individually is charged, so describing both as neutral overlooks the separation that rubbing produced.",
    "id": 16
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "Which source of voltage works by a chemical reaction between two different materials in an electrolyte?",
    "options": {
      "A": "A thermocouple, which makes voltage from heat at a junction of two metals",
      "B": "A lead-acid battery cell, where plates and acid react to separate charge",
      "C": "A solar cell, which makes voltage when light strikes a layer of silicon",
      "D": "A quartz igniter, which makes voltage when a crystal is squeezed by a hammer"
    },
    "answer": "B",
    "explanation": "A battery cell produces voltage through a chemical reaction between electrodes and an electrolyte, which separates charge between the terminals. A thermocouple depends on temperature difference at a metal junction. A solar cell uses light striking a semiconductor to free charge. A quartz igniter uses mechanical pressure on a crystal, which is the piezoelectric effect. None of those three involves a chemical reaction, so each fits a different voltage source.",
    "id": 17
  },
  {
    "domain": "fundamentals",
    "chapter": 2,
    "question": "Which list ranks these common metals from the best electrical conductor to the poorest?",
    "options": {
      "A": "Silver first, then copper, then gold, and aluminum last of the four",
      "B": "Copper first, then silver, then aluminum, and gold last of the four",
      "C": "Gold first, then silver, then copper, and aluminum last of the four",
      "D": "Aluminum first, then gold, then copper, and silver last of the four"
    },
    "answer": "A",
    "explanation": "Silver conducts best of the common metals, copper is a close second, gold follows, and aluminum conducts the least of the four, at roughly 60 percent of copper. Placing copper ahead of silver reverses the top two. Putting gold first confuses its corrosion resistance with its conductivity, since gold is used on connectors because it does not tarnish, not because it conducts best. The last list is nearly the reverse of the correct order.",
    "id": 18
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "Which quantity describes the electrical push that moves charge through a circuit, and what is its unit?",
    "options": {
      "A": "Current, measured in amperes, the number of coulombs passing a point each second",
      "B": "Voltage, measured in volts, the potential difference between two points",
      "C": "Resistance, measured in ohms, the opposition that a material offers to the flow",
      "D": "Conductance, measured in siemens, the ease with which a material passes current"
    },
    "answer": "B",
    "explanation": "Voltage is the potential difference that provides the push, and its unit is the volt. Current is the result of that push and is the flow itself, measured in amperes. Resistance is the opposition that holds current back and is measured in ohms, so it works against the push rather than providing it. Conductance is the reciprocal of resistance and describes how easily current passes, using the siemens, which makes it another property of the path and not the push.",
    "id": 19
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "What is the approximate resistance of 100 feet of 12 AWG copper wire, which has 6,530 circular mils of area, using a resistivity of 10.37 ohm-circular mils per foot?",
    "options": {
      "A": "About 1.59 ohms, which comes from using 1,000 feet in place of 100 feet",
      "B": "About 15.9 ohms, found by misplacing the decimal point by two places",
      "C": "About 0.0016 ohm, an answer that is far too small for this length of wire",
      "D": "About 0.159 ohm, from 10.37 times 100 divided by 6,530 circular mils"
    },
    "answer": "D",
    "explanation": "Using R = ρL / A gives 10.37 × 100 / 6,530 = 0.159 ohm. A result of 1.59 ohms would be correct for 1,000 feet, which is ten times the length given. A result of 15.9 ohms is one hundred times too large and comes from a decimal error. A result of 0.0016 ohm is one hundred times too small, and a wire 100 feet long and about as thick as a pencil lead would not be so low in resistance.",
    "id": 20
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A resistor is marked 4.7 kΩ. What is its value in ohms?",
    "options": {
      "A": "4,700 ohms, found by multiplying 4.7 by one thousand for the kilo prefix",
      "B": "470 ohms, found by multiplying 4.7 by one hundred rather than one thousand",
      "C": "47,000 ohms, found by multiplying 4.7 by ten thousand by mistake in the conversion",
      "D": "0.0047 ohm, found by dividing by one thousand as if the prefix were milli"
    },
    "answer": "A",
    "explanation": "The prefix kilo means one thousand, so 4.7 kilohms equals 4.7 × 1,000, or 4,700 ohms. A value of 470 ohms multiplies by one hundred instead of one thousand, so the decimal point has moved one place too few. A value of 47,000 ohms multiplies by ten thousand, which is one decimal place too many. A value of 0.0047 ohm divides by a thousand, which is the conversion for milli, not kilo.",
    "id": 21
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "An electrician finds that the copper winding of a motor reads a higher resistance after the motor has run for an hour than it did when cold. What explains the change?",
    "options": {
      "A": "Copper gains free electrons as it heats, so it resists current less than it did before",
      "B": "The insulation on the winding improves as it warms, which adds resistance to the wire",
      "C": "Warm copper has more atomic vibration, which scatters drifting electrons more often",
      "D": "Heat makes the wire thicker, and a thicker wire always has more resistance than a thin one"
    },
    "answer": "C",
    "explanation": "In metals, rising temperature increases the vibration of the atoms, so moving electrons collide with them more often and resistance goes up. Copper does not gain free electrons when it heats, and if it did, the resistance would fall rather than rise. Winding insulation is not in the current path, so its condition does not add to the measured resistance of the conductor. Thermal expansion is far too small to matter, and a thicker wire would have less resistance, not more.",
    "id": 22
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A 200 foot run uses 8 AWG aluminum conductor with 16,510 circular mils and a resistivity of 17 ohm-circular mils per foot. What is its resistance?",
    "options": {
      "A": "About 0.126 ohm, the value that copper of the same size would give",
      "B": "About 0.206 ohm, found from 17 times 200 divided by 16,510",
      "C": "About 0.412 ohm, found by counting the length twice for the return",
      "D": "About 4.85 ohms, found by dividing the area by the length instead"
    },
    "answer": "B",
    "explanation": "Applying R = ρL / A with aluminum's resistivity gives 17 × 200 / 16,510 = 0.206 ohm. The value of 0.126 ohm comes from using the copper resistivity of 10.37, which is the wrong material for this wire. The value of 0.412 ohm doubles the length, which would apply only if the question asked for the round trip through a pair of conductors. The value of 4.85 ohms comes from dividing area by length and multiplying by the resistivity, which uses the formula upside down.",
    "id": 23
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "Two copper conductors of equal length feed identical loads, one a 14 AWG wire and the other a 10 AWG wire. Which statement is correct?",
    "options": {
      "A": "The 14 AWG wire has less resistance because thin wires pack their electrons closer together",
      "B": "The two wires have the same resistance because they are the same metal",
      "C": "The 14 AWG wire has less resistance because a higher number means more copper",
      "D": "The 10 AWG wire has less resistance because its larger cross section gives more room"
    },
    "answer": "D",
    "explanation": "Resistance is inversely proportional to cross-sectional area, and 10 AWG has about 10,380 circular mils against 4,110 for 14 AWG, so it has about 40 percent of the resistance. The idea that thin wire packs electrons closer has no basis, and it reaches the opposite conclusion from the formula. Material alone does not set resistance, since length and area also matter. A higher gauge number means a thinner wire with less copper, so the claim that a higher number means more copper is backward.",
    "id": 24
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A test meter reads a leakage current of 36 microamperes. What is this in amperes?",
    "options": {
      "A": "0.000036 A, found by dividing 36 by one million for the micro prefix",
      "B": "0.0036 A, found by dividing 36 by ten thousand instead of one million",
      "C": "0.036 A, found by dividing 36 by one thousand as if the prefix were milli",
      "D": "36,000 A, found by multiplying 36 by one thousand in the wrong direction"
    },
    "answer": "A",
    "explanation": "The prefix micro means one millionth, so 36 microamperes equals 36 ÷ 1,000,000, or 0.000036 ampere. The value 0.0036 ampere is one hundred times too large, and it equals 3.6 milliamperes. The value 0.036 ampere is 36 milliamperes, using the prefix milli in place of micro. The value 36,000 amperes multiplies by a thousand and is wildly wrong, because it moves the decimal point in the wrong direction for a small prefix.",
    "id": 25
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "On a 60 hertz utility system, how many times each second does the direction of current in an AC circuit reverse?",
    "options": {
      "A": "30 times, because each cycle includes only half a reversal",
      "B": "6 times, since utility power is slow compared with electronics",
      "C": "120 times, because each cycle includes two reversals of direction",
      "D": "0 times, since AC changes size but never actually changes direction"
    },
    "answer": "C",
    "explanation": "Alternating current completes 60 full cycles per second, and each cycle contains two changes of direction, so the current reverses 120 times each second. A count of 30 halves the number of cycles instead of doubling it. A count of 6 has no basis in the frequency. The claim that AC never reverses is the definition of direct current, not alternating current, since the name alternating comes from the repeated change in direction.",
    "id": 26
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A heating element has a resistance of 4 ohms. What is its conductance?",
    "options": {
      "A": "4 siemens, the same number as the resistance but with a new unit",
      "B": "0.25 siemens, found by dividing one by the resistance in ohms",
      "C": "16 siemens, found by squaring the resistance value given in the question",
      "D": "0.4 siemens, found by dividing the resistance by ten before stating it"
    },
    "answer": "B",
    "explanation": "Conductance is the reciprocal of resistance, so G = 1 / 4 = 0.25 siemens. Stating the same number would ignore the reciprocal relationship, and conductance falls as resistance rises. Squaring the resistance gives 16, which has no meaning here and would make conductance grow with resistance. Dividing resistance by ten is not a relationship between the two quantities and gives 0.4, which does not correspond to any rule in the chapter.",
    "id": 27
  },
  {
    "domain": "fundamentals",
    "chapter": 3,
    "question": "A solid round wire has a diameter of 0.1 inch. What is its cross-sectional area in circular mils?",
    "options": {
      "A": "10,000 circular mils, found by squaring the diameter of 100 mils",
      "B": "7,854 circular mils, found by using pi times the radius squared",
      "C": "100 circular mils, found by using the diameter in mils unchanged",
      "D": "31,416 circular mils, found by using pi times the diameter squared"
    },
    "answer": "A",
    "explanation": "The area in circular mils equals the diameter in mils squared, and 0.1 inch is 100 mils, so the area is 10,000. The value 7,854 is the area in square mils, which results from using the circle area formula and is a different unit. The value 100 is just the diameter and has not been squared. The value 31,416 applies pi to the diameter squared, which is four times the true square mil area and has no use here.",
    "id": 28
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "Which statement correctly describes Ohm's law for a resistive circuit at a steady temperature?",
    "options": {
      "A": "Current is proportional to resistance and inversely proportional to the applied voltage in the circuit",
      "B": "Voltage is equal to the current divided by the resistance of the circuit being studied",
      "C": "Resistance is equal to the voltage multiplied by the current flowing through the whole part",
      "D": "Current is proportional to the applied voltage and inversely proportional to the resistance"
    },
    "answer": "D",
    "explanation": "Ohm's law states that current rises in direct proportion to voltage and falls as resistance rises, so I = V / R. The statement tying current to resistance swaps the roles of voltage and resistance, which would make current grow when resistance grows. The statement about voltage inverts the formula for voltage, which is actually V = I × R. The statement about resistance describes power, because voltage times current is watts, not ohms, and resistance equals voltage divided by current.",
    "id": 29
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "A 240 volt water heater element draws 18.75 amperes. What is the resistance of the element?",
    "options": {
      "A": "0.078 ohm, found by dividing the current by the voltage",
      "B": "12.8 ohms, found by dividing the voltage by the current",
      "C": "258.75 ohms, found by adding the voltage and the current",
      "D": "4,500 ohms, which is really the power in watts and not a resistance"
    },
    "answer": "B",
    "explanation": "Resistance equals voltage divided by current, so 240 divided by 18.75 equals 12.8 ohms. Dividing current by voltage gives 0.078, which is the conductance in siemens. Adding unlike quantities has no physical meaning. Multiplying voltage by current gives 4,500, but that is the power in watts and it carries the wrong unit, so labeling it as ohms confuses two different quantities and cannot be accepted.",
    "id": 30
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "A purely resistive load on a 480 volt circuit draws 6.5 amperes. What power does the load use?",
    "options": {
      "A": "3,120 watts, found by multiplying voltage and current",
      "B": "73.8 watts, found by dividing the voltage by the current",
      "C": "3.12 watts, found by dropping three zeros from the product",
      "D": "31,200 watts, found by adding a zero to the product"
    },
    "answer": "A",
    "explanation": "Power equals voltage times current, so 480 × 6.5 gives 3,120 watts, or 3.12 kilowatts. Dividing 480 by 6.5 gives about 73.8, which is the resistance in ohms and not a power. The value 3.12 watts is the result of confusing kilowatts with watts. The value 31,200 watts is ten times too large, because of an extra zero, and it would imply a current of 65 amperes at this voltage.",
    "id": 31
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "A 1,500 watt, 120 volt heater is expected to run for many hours on a 15 ampere branch circuit with nothing else connected. What should the electrician conclude?",
    "options": {
      "A": "It is acceptable, since 12.5 amperes is below the 15 ampere rating of the breaker",
      "B": "It is acceptable, because heaters are exempt from the rule for continuous loads",
      "C": "It is not acceptable, because the heater draws 18.75 amperes at this voltage",
      "D": "It is not acceptable, since 12.5 amperes exceeds 12 amperes, 80 percent of 15"
    },
    "answer": "D",
    "explanation": "The heater draws 1,500 / 120, or 12.5 amperes. A continuous load should not exceed 80 percent of the overcurrent device rating, which is 12 amperes on a 15 ampere breaker, so 12.5 amperes is too high and the heater belongs on a larger circuit. Comparing with the full 15 amperes ignores the continuous load rule. No exemption exists for heaters. The figure of 18.75 amperes would be correct only for 80 volts, which does not apply to this heater.",
    "id": 32
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "A 2.5 kilowatt heater runs for 6 hours, and electricity costs 15 cents per kilowatt-hour. What is the cost?",
    "options": {
      "A": "$0.38, found by multiplying the power by the rate only",
      "B": "$0.90, found by multiplying the hours by the rate only",
      "C": "$2.25, found from 15 kilowatt-hours at 15 cents each",
      "D": "$2,250, found by using watts in place of kilowatts"
    },
    "answer": "C",
    "explanation": "Energy is 2.5 kW times 6 hours, or 15 kWh, and 15 kWh at $0.15 comes to $2.25. Multiplying power by rate alone leaves out the time, which gives only a fraction of the true cost. Multiplying hours by the rate alone leaves out the power and gives $0.90. Using 2,500 watts in place of kilowatts without converting makes the answer one thousand times too large, since the rate applies to kilowatt-hours.",
    "id": 33
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "A 4,000 watt heating element is rated for 240 volts. What is its resistance?",
    "options": {
      "A": "60 ohms, found by dividing 240 by four",
      "B": "14.4 ohms, found by dividing 240 squared by 4,000",
      "C": "16.7 ohms, which is actually the current in amperes",
      "D": "57,600 ohms, found by squaring the voltage and stopping there"
    },
    "answer": "B",
    "explanation": "Resistance equals voltage squared divided by power, so 240² / 4,000 = 57,600 / 4,000 = 14.4 ohms. Dividing 240 by four does not use the power in watts correctly and gives an unrelated value. The value 16.7 comes from dividing 4,000 by 240, which is the current in amperes, so it carries the wrong unit. The value 57,600 is the squared voltage before dividing by the power, so it is only an intermediate step.",
    "id": 34
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "If the voltage applied to a fixed resistive heater is doubled, what happens to the power it produces?",
    "options": {
      "A": "It doubles, since power is directly proportional to the applied voltage in every circuit",
      "B": "It stays the same, since the resistance of the heater does not change at all",
      "C": "It becomes four times as large, since power varies with the voltage squared",
      "D": "It is cut in half, since higher voltage reduces the current through the heater"
    },
    "answer": "C",
    "explanation": "With resistance fixed, P = V² / R, so doubling voltage multiplies power by four. Doubling the current that results does the same through P = I² × R. Direct proportionality would apply only if current stayed fixed, which it does not. The idea that nothing changes ignores that more voltage pushes more current through the same resistance. Higher voltage raises current in proportion, so power cannot be cut in half.",
    "id": 35
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "A 5 horsepower motor delivers 3,730 watts at the shaft and draws 4,200 watts from the line. What is its efficiency?",
    "options": {
      "A": "112.6 percent, found by dividing the input by the output",
      "B": "88.8 percent, found by dividing the output by the input",
      "C": "75.0 percent, an assumed typical value not found from the data",
      "D": "12.6 percent, which is the lost fraction of the output power"
    },
    "answer": "B",
    "explanation": "Efficiency is output divided by input, so 3,730 / 4,200 is 0.888, or 88.8 percent. A value over 100 percent comes from inverting the ratio and is physically impossible for a motor. A value of 75 percent would require a different input than the stated one. The value of 12.6 percent is the loss of 470 watts divided by the output, which is a different ratio that does not measure how well the motor converts power.",
    "id": 36
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "A 220 ohm resistor is placed across a 12 volt supply. Which power rating is the best choice?",
    "options": {
      "A": "One quarter watt, since the current of about 55 milliamperes is small",
      "B": "One half watt, since 0.65 watt rounds down to the nearest rating",
      "C": "Any rating will work, since power is set only by the supply",
      "D": "Two watts, since 0.65 watt should stay under half the rating"
    },
    "answer": "D",
    "explanation": "The power is 12² / 220, or 0.65 watt. A good practice is to choose a rating at least double the expected dissipation, which points to a two watt part. A quarter watt part would be overloaded at more than twice its rating. A half watt part is also overloaded and rounding down is never acceptable for heat. Power depends on both the supply voltage and the resistance, and the part must be able to shed that heat.",
    "id": 37
  },
  {
    "domain": "dc_theory",
    "chapter": 4,
    "question": "A 60 watt lamp is left on for 50 hours. How much energy does it use?",
    "options": {
      "A": "3 kilowatt-hours, found from 0.06 kilowatt times 50 hours",
      "B": "0.3 kilowatt-hours, found by shifting the decimal point incorrectly",
      "C": "30 kilowatt-hours, found by multiplying 60 by 0.5 hours",
      "D": "3,000 kilowatt-hours, found by leaving the lamp rating in watts"
    },
    "answer": "A",
    "explanation": "Sixty watts is 0.06 kilowatt, and 0.06 × 50 gives 3 kilowatt-hours. The value of 0.3 is ten times too small, from a misplaced decimal. The value of 30 divides the time incorrectly and shows no sign of a proper unit conversion. The value of 3,000 results from multiplying 60 watts by 50 hours to get 3,000 watt-hours and then calling that figure kilowatt-hours without dividing by one thousand.",
    "id": 38
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "In a series circuit made of a source and three resistors, which quantity is the same through every resistor?",
    "options": {
      "A": "The current, because charge has only one path and cannot pile up anywhere",
      "B": "The voltage, because each resistor is connected directly across the source terminals",
      "C": "The power, because the source divides its output equally among all the resistors",
      "D": "The resistance, because the circuit wiring forces every part to match the others"
    },
    "answer": "A",
    "explanation": "There is only one path, so the same current passes through every part. Voltage is shared out among the resistors and adds up to the source voltage, so it differs unless the resistors are equal, and the resistors are not each across the source. Power depends on the resistance and current in each, so larger resistors dissipate more. Resistances may be different from one another, and the wiring has no effect on the individual values.",
    "id": 39
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "Resistors of 220 ohms, 330 ohms, and 470 ohms are connected in series. What is the total resistance?",
    "options": {
      "A": "340 ohms, found by averaging the three resistor values",
      "B": "1,020 ohms, found by adding the three resistor values",
      "C": "103 ohms, which is the result of a parallel combination",
      "D": "220 ohms, which is the smallest value in the group"
    },
    "answer": "B",
    "explanation": "Series resistances add, so 220 + 330 + 470 gives 1,020 ohms. An average of 340 ohms would describe a typical single resistor and not the circuit as a whole. The value of about 103 ohms comes from combining the same resistors in parallel, which is a different connection and always gives a result below the smallest one. A total equal to the smallest resistor ignores the other two, which also oppose the current.",
    "id": 40
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "A 24 volt source feeds three resistors in series that total 1,200 ohms. What current flows in the circuit?",
    "options": {
      "A": "200 mA, found by moving the decimal point one place too far",
      "B": "2 mA, found by moving the decimal point one place too far the other way",
      "C": "20 mA, found by dividing 24 volts by 1,200 ohms",
      "D": "28,800 A, found by multiplying the voltage by the resistance"
    },
    "answer": "C",
    "explanation": "Ohm's law gives I = 24 / 1,200 = 0.02 ampere, which is 20 milliamperes. A value of 200 milliamperes is ten times too large, and a value of 2 milliamperes is ten times too small. Both are decimal place errors. Multiplying voltage by resistance yields 28,800, which is not a current at all and carries no meaning, since volts times ohms is not a unit used in circuit work.",
    "id": 41
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "A 12 volt supply drives a divider made of a 100 ohm resistor in series with a 300 ohm resistor. What is the voltage across the 300 ohm resistor?",
    "options": {
      "A": "9 V, since it holds three quarters of the total resistance",
      "B": "3 V, since it is the larger of the two resistors in the pair",
      "C": "6 V, since two series resistors always share the supply equally",
      "D": "12 V, since it is connected to the positive supply terminal"
    },
    "answer": "A",
    "explanation": "The 300 ohm resistor is 300 of 400 ohms, or three quarters of the total, and takes three quarters of 12 volts, which is 9 volts. The value of 3 volts is the drop across the smaller resistor. The two resistors would share equally only if their resistances were equal. The full 12 volts appears across the pair together, and neither resistor alone can see all of it while current flows through both.",
    "id": 42
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "In a 24 volt control circuit, a switch, a relay coil, and a lamp are in series, and nothing operates. A voltmeter across the lamp reads 0 V, across the coil reads 0 V, and across the switch reads 24 V. What is the fault?",
    "options": {
      "A": "The lamp is shorted, because it shows no voltage across the lamp",
      "B": "The relay coil is open, because it shows no voltage across the coil",
      "C": "The supply has failed, because the lamp and the coil both read zero",
      "D": "The switch is open, because the full supply appears across it"
    },
    "answer": "D",
    "explanation": "In a series circuit with a single open, the open part carries the full supply voltage and every other part reads zero because no current flows. The switch reading 24 volts identifies it as the open. A shorted lamp would raise the voltage on the other parts, and the circuit would carry current. An open coil would show full voltage across the coil. A failed supply would read zero across every device, including the switch.",
    "id": 43
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "A 120 volt source feeds three loads in series. Two of them drop 30 volts and 45 volts. What is the drop across the third load?",
    "options": {
      "A": "75 V, which is the sum of the two known voltage drops",
      "B": "45 V, the source voltage minus both known drops",
      "C": "195 V, found by adding all three numbers together with the supply",
      "D": "90 V, found by doubling the larger of the two known voltage drops"
    },
    "answer": "B",
    "explanation": "By Kirchhoff's voltage law, the drops sum to the source voltage, so the third is 120 − 30 − 45 = 45 volts. The value of 75 volts is the total of the two known drops, which still leaves 45 volts unaccounted for. Adding all three numbers, including the source, mixes a source value with drops and gives a number larger than the supply. Doubling one known drop has no basis and ignores the loop law.",
    "id": 44
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "Resistors of 10 ohms and 30 ohms are connected in series across 40 volts. How much power does the 30 ohm resistor dissipate?",
    "options": {
      "A": "10 W, found by using the power of the smaller resistor",
      "B": "40 W, found by using the total power of the whole circuit",
      "C": "53.3 W, found by using the full 40 volts across the 30 ohm resistor",
      "D": "30 W, found from the 1 ampere of current squared times 30 ohms"
    },
    "answer": "D",
    "explanation": "Total resistance is 40 ohms, so the current is 1 ampere, and the 30 ohm resistor dissipates 1² × 30 = 30 watts. The value of 10 watts belongs to the smaller resistor. The value of 40 watts is the power of the entire circuit and includes both parts. The value of 53.3 watts applies the whole supply voltage to one resistor, but only 30 volts appears across it in a series circuit.",
    "id": 45
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "Ten identical 12 volt lamps burn normally in a series string on 120 volts. One lamp then shorts out. What happens to the other nine?",
    "options": {
      "A": "They go dark, because a short always opens the circuit",
      "B": "They stay at the same brightness, because the current is unchanged",
      "C": "They each receive about 13.3 volts and burn brighter than before",
      "D": "They each receive about 10.9 volts and burn dimmer than before"
    },
    "answer": "C",
    "explanation": "A shorted lamp drops zero volts, so the full 120 volts is shared among the remaining nine lamps, giving 120 / 9 = 13.3 volts each, which is above their rating. A short does not open a circuit; an open does. The current increases because total resistance fell, so brightness cannot stay the same. The value of 10.9 volts would result from dividing by eleven lamps, which would apply if another lamp had been added instead.",
    "id": 46
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "A 24 volt series circuit includes a switch, a relay coil, and a lamp. With the switch open, a voltmeter is placed across the switch contacts. What does it read?",
    "options": {
      "A": "0 V, since no current flows through any part of the circuit",
      "B": "24 V, since the open switch holds all of the resistance",
      "C": "12 V, since the voltage is shared evenly between switch and lamp",
      "D": "8 V, since the voltage is shared evenly among all three parts"
    },
    "answer": "B",
    "explanation": "With the switch open, the open contacts have effectively infinite resistance in series with the coil and lamp, so nearly all of the supply appears across the switch and the meter reads close to 24 volts. A zero reading would apply across the coil or lamp, not across the break. A reading of 12 or 8 volts assumes equal sharing, but there is no current, so the other parts have almost no drop.",
    "id": 47
  },
  {
    "domain": "dc_circuits",
    "chapter": 5,
    "question": "A 240 volt supply feeds a 20 ohm heater through wiring that has a total round-trip resistance of 0.4 ohm. What is the voltage at the heater?",
    "options": {
      "A": "240 V, since wires carry current without any loss",
      "B": "239.6 V, found by subtracting 0.4 volt directly from the supply",
      "C": "4.7 V, which is the drop in the wire rather than the voltage at the load",
      "D": "235.3 V, found from a current of 11.76 A through the 20 ohm heater"
    },
    "answer": "D",
    "explanation": "Total resistance is 20.4 ohms, so the current is 240 / 20.4 = 11.76 amperes, and the heater receives 11.76 × 20 = 235.3 volts. Wires do have resistance, so the load never receives the full supply voltage. Subtracting 0.4 from 240 treats ohms as volts, which is not valid. The figure of 4.7 volts is the drop in the conductors, which is a correct number but answers a different question.",
    "id": 48
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "In a parallel circuit with three branches connected to a single source, which quantity is the same across every branch?",
    "options": {
      "A": "The voltage, because each branch connects directly to the same two rails",
      "B": "The current, because charge has only one path to follow through the circuit",
      "C": "The resistance, because the branches are all wired to the same source",
      "D": "The power, because the source divides its output equally between branches"
    },
    "answer": "A",
    "explanation": "Each branch connects to the same two points, so the voltage across each branch is the same as the source voltage. Current divides at the junction and depends on each branch resistance, so it is generally different in each branch. Resistances may differ from branch to branch, and the source connection does not make them equal. Power in each branch equals voltage times that branch current, so it differs unless the branches have the same resistance.",
    "id": 49
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "Three heaters of 24 ohms, 40 ohms, and 60 ohms are connected in parallel. What is the total resistance?",
    "options": {
      "A": "124 ohms, found by adding the three resistance values",
      "B": "12 ohms, found by inverting the sum of the reciprocals",
      "C": "41.3 ohms, found by averaging the three resistance values",
      "D": "0.083 ohm, found by adding the reciprocals without inverting"
    },
    "answer": "B",
    "explanation": "The reciprocals sum to 1/24 + 1/40 + 1/60 = 0.0833 siemens, and inverting that sum gives 12 ohms, which is lower than the smallest branch as expected for parallel resistors. Adding the three values gives the series total, which is the wrong connection. An average of 41.3 ohms would be a typical single value, not the combined value. The reciprocal sum of 0.083 is a conductance in siemens, and it was not inverted back to ohms.",
    "id": 50
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "What is the combined resistance of a 30 ohm resistor and a 20 ohm resistor connected in parallel?",
    "options": {
      "A": "50 ohms, found by adding the two resistors together",
      "B": "25 ohms, found by averaging the two resistor values",
      "C": "12 ohms, found by dividing the product by the sum",
      "D": "600 ohms, found by multiplying the two values together"
    },
    "answer": "C",
    "explanation": "For two resistors in parallel, the total is the product divided by the sum, so 600 divided by 50 equals 12 ohms. Adding the values gives the series result, which is larger than either resistor. Averaging gives a value between the two, but a parallel pair must have a total below the smaller one. The product alone, 600, is only the numerator of the formula and has not been divided by the sum.",
    "id": 51
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "Four identical 48 ohm heating sections are connected in parallel across 240 volts. What total current do they draw?",
    "options": {
      "A": "20 A, since the combined resistance is 12 ohms",
      "B": "5 A, which is the current of only one section",
      "C": "80 A, found by multiplying the correct total by four again",
      "D": "1.25 A, which would apply if the sections were in series"
    },
    "answer": "A",
    "explanation": "Four equal resistors in parallel give 48 / 4 = 12 ohms, so the current is 240 / 12 = 20 amperes, which also equals four branches of 5 amperes each. A current of 5 amperes counts only one section. A current of 80 amperes multiplies the true total by four a second time. A current of 1.25 amperes comes from dividing 240 volts by the series total of 192 ohms, which is the wrong connection.",
    "id": 52
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "One lamp in a parallel bank of five lamps on a 120 volt circuit burns out and opens. What happens to the other four lamps?",
    "options": {
      "A": "They all go dark, because the open breaks the only path to the source",
      "B": "They glow brighter, because the extra voltage must go somewhere else in the circuit",
      "C": "They glow dimmer, because the total current has fallen in the main line",
      "D": "They are unaffected, since each still has full voltage across it"
    },
    "answer": "D",
    "explanation": "Each branch is connected directly across the supply, so an open in one branch leaves the others with the same 120 volts and the same current as before. Only the total current falls. All lamps going dark describes a series circuit, where there is only one path. Extra voltage does not appear, since the source voltage does not change. Dimming would mean lower voltage, but nothing has reduced the voltage across the remaining lamps.",
    "id": 53
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "A feeder carries 12 amperes into a junction that supplies three parallel branches. Two branches carry 4.5 A and 3.5 A. What current does the third branch carry?",
    "options": {
      "A": "8.0 A, found by adding the two known branch currents at the junction",
      "B": "20 A, found by adding the feeder current to the two known branch currents",
      "C": "4.0 A, found by subtracting the known branches from the total",
      "D": "0 A, because currents entering and leaving a junction cancel each other out"
    },
    "answer": "C",
    "explanation": "Kirchhoff's current law says the branch currents add up to the total entering the junction, so the third branch carries 12 − 4.5 − 3.5 = 4.0 amperes. The sum of the two known branches, 8.0 amperes, leaves 4.0 amperes unaccounted for. Adding the feeder current to the branches counts the same charge twice. The idea that currents cancel to zero confuses the equality of in and out with a net of zero in each branch.",
    "id": 54
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "A total current of 15 amperes enters two parallel branches of 10 ohms and 20 ohms. What current flows in the 10 ohm branch?",
    "options": {
      "A": "5 A, which is the current in the 20 ohm branch",
      "B": "7.5 A, found by splitting the total equally between them",
      "C": "15 A, since the lower resistance takes all of the current",
      "D": "10 A, found from 15 times 20 divided by 30"
    },
    "answer": "D",
    "explanation": "The current divider rule gives the 10 ohm branch 15 × 20 / (10 + 20) = 10 amperes, and the 20 ohm branch gets 5 amperes. The value of 5 amperes belongs to the larger resistor. An equal split would occur only with equal resistances. The lower resistance takes the larger share but not all of the current, because the higher resistance branch still has the same voltage across it and so still draws some current.",
    "id": 55
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "A kitchen circuit already has a toaster oven running. A person plugs a microwave and a coffee maker into the same circuit. What happens to the circuit as a whole?",
    "options": {
      "A": "Total resistance rises and total current falls because more loads share the line",
      "B": "Total resistance falls and total current rises, which can trip the breaker",
      "C": "Both stay the same, since each outlet has its own separate wiring",
      "D": "Total current stays the same, but the voltage at each load doubles"
    },
    "answer": "B",
    "explanation": "Each load added in parallel provides another path, so total resistance falls and the total current is the sum of all the loads. If that sum goes over the rating of the breaker, it trips. The opposite trend, where resistance rises with more loads, describes series wiring. Outlets on one branch circuit share the same conductors, so the totals do change. Voltage at the loads does not double, and it may actually sag slightly under heavy load.",
    "id": 56
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "A 120 volt source feeds loads of 24 ohms, 40 ohms, and 60 ohms in parallel. What is the total power used?",
    "options": {
      "A": "1,200 W, from 120 squared divided by 12 ohms",
      "B": "600 W, which is only the power in the largest single branch",
      "C": "14,400 W, which is the voltage squared with no division by resistance",
      "D": "360 W, which is only the power in the middle branch alone"
    },
    "answer": "A",
    "explanation": "The branch powers are 600, 360, and 240 watts, which add to 1,200 watts, and the same value comes from 120² / 12. The value of 600 watts is just the branch with the lowest resistance, and ignores the other two. The value of 14,400 is the numerator of the formula, with no resistance used. The value of 360 watts is only the 40 ohm branch and leaves the other two out of the total.",
    "id": 57
  },
  {
    "domain": "dc_circuits",
    "chapter": 6,
    "question": "Two heaters of 10 ohms and 40 ohms are connected in parallel across 60 volts. What total current do they draw?",
    "options": {
      "A": "1.2 A, found by treating the heaters as a series pair",
      "B": "6.0 A, which counts only the 10 ohm heater",
      "C": "7.5 A, found from 6 A plus 1.5 A in the two branches",
      "D": "3.75 A, which is half of the true total current"
    },
    "answer": "C",
    "explanation": "The 10 ohm branch draws 60 / 10 = 6 amperes and the 40 ohm branch draws 60 / 40 = 1.5 amperes, so the total is 7.5 amperes, matching 60 divided by the combined 8 ohms. A series treatment gives 60 / 50 = 1.2 amperes, which is the wrong connection. Counting just the 10 ohm heater leaves out the second branch. Half the true total has no basis in the circuit rules.",
    "id": 58
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "A 90 V source feeds a 15 Ω resistor in series with two 30 Ω resistors connected in parallel. What total current does the source supply?",
    "options": {
      "A": "6.0 A, found by dividing 90 V by the 15 ohm resistor and ignoring the pair.",
      "B": "1.2 A, found by adding all three resistor values as though in one series string.",
      "C": "2.0 A, found by dividing 90 V by 45 ohms after ignoring one parallel resistor.",
      "D": "3.0 A, found by dividing 90 V by 30 ohms, the series resistor plus the pair."
    },
    "answer": "D",
    "explanation": "The two 30 ohm resistors in parallel equal 15 ohms, and adding the 15 ohm series resistor gives 30 ohms, so 90 V divided by 30 ohms is 3.0 A. Using only the series resistor ignores the parallel pair entirely and gives an impossibly large current. Adding every value as a series string treats parallel resistors as series and produces too little current. Dropping one parallel resistor leaves 45 ohms, which overstates the total resistance and understates the current.",
    "id": 59
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "In a combination circuit, which test identifies two resistors as being in parallel with each other?",
    "options": {
      "A": "Both ends of one resistor connect to the same two points as the other's ends.",
      "B": "The same current passes through both resistors because only one path exists between them.",
      "C": "The two resistors sit side by side on the drawing with no component between them.",
      "D": "The two resistors have equal values, so the source voltage divides evenly across them."
    },
    "answer": "A",
    "explanation": "Parallel components share the same pair of nodes, so each sees the same voltage and the branch currents add. Having the same current through both describes a series connection, not a parallel one. Sitting close together on a drawing says nothing about electrical connection, because drawings can place series parts side by side. Equal values are not required for parallel, and dividing voltage evenly describes a series pair, since parallel parts all see the full voltage.",
    "id": 60
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "A 60 V source feeds an 8 Ω resistor in series with a 24 Ω resistor and a 12 Ω resistor connected in parallel. What voltage appears across the 24 Ω resistor?",
    "options": {
      "A": "60 V, because every parallel branch sees the full source voltage in any circuit.",
      "B": "30 V, because the parallel pair equals 8 ohms, matching the series resistor.",
      "C": "15 V, because the two parallel resistors divide the voltage left after the series drop.",
      "D": "45 V, because the 24 ohm resistor takes three quarters of the source voltage."
    },
    "answer": "B",
    "explanation": "The 24 and 12 ohm resistors in parallel equal 8 ohms, which equals the series resistor, so total resistance is 16 ohms and the current is 3.75 A. Each equal 8 ohm part drops 30 V, and that 30 V appears across both parallel resistors. Claiming the full source voltage forgets the drop in the series resistor. Splitting the voltage between the parallel resistors is a series idea, and the three quarters figure has no basis in the calculation.",
    "id": 61
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "In a circuit with one resistor in series with a parallel pair, one parallel resistor burns open. What changes?",
    "options": {
      "A": "Total current rises, because the open resistor no longer opposes any current in the circuit at all.",
      "B": "Total current stays the same, because the source voltage has not changed at all.",
      "C": "Total current falls, the series drop shrinks, and the remaining branch voltage rises.",
      "D": "Total current falls, and the voltage across the remaining parallel branch also falls with it."
    },
    "answer": "C",
    "explanation": "Removing a parallel path raises the equivalent resistance of the pair, so total resistance rises and the current drops. A smaller current means a smaller drop across the series resistor, which leaves more of the source voltage for the surviving branch. An open does not lower resistance, so current cannot rise. Current only stays constant if resistance is unchanged. The surviving branch voltage rises, so saying it falls contradicts the voltage loop rule.",
    "id": 62
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "A 25 Ω resistor is in series with a group made of a 40 Ω and a 20 Ω resistor in series, connected in parallel with a 30 Ω resistor. What is the total resistance seen by the source?",
    "options": {
      "A": "115 Ω, found by adding all four resistor values as one long series string.",
      "B": "45 Ω, found by combining 60 and 30 in parallel and adding the 25 ohm part.",
      "C": "34.2 Ω, found by treating the 40, 20 and 30 ohm resistors as three parallel parts.",
      "D": "6.7 Ω, found by combining all four resistors in parallel using the reciprocal method."
    },
    "answer": "B",
    "explanation": "The 40 and 20 ohm resistors in series make 60 ohms, and 60 in parallel with 30 gives (60 times 30) over 90, which is 20 ohms. Adding the 25 ohm resistor gives 45 ohms. Adding everything in series ignores the parallel path. Treating the series pair as separate parallel parts gives a smaller group value and a total near 34 ohms. Putting all four in parallel ignores the real wiring and gives a much lower total.",
    "id": 63
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "A current of 5 A flows through a 6 Ω resistor that is in series with a parallel pair. How much power does that series resistor dissipate?",
    "options": {
      "A": "150 W, found by squaring the current and multiplying by the resistance.",
      "B": "30 W, found by multiplying the current by the resistance only once.",
      "C": "900 W, found by multiplying the current and resistance, then squaring the product.",
      "D": "4.2 W, found by squaring the current and dividing by the resistance."
    },
    "answer": "A",
    "explanation": "The formula P equals I squared times R gives 25 times 6, which is 150 W. Multiplying current by resistance gives a voltage of 30 V, not a power, so the figure of 30 carries the wrong unit. Squaring the voltage product produces a number with no physical meaning here. Dividing the squared current by resistance mixes up the power formulas, since that form belongs to voltage squared over resistance.",
    "id": 64
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "A 12 V source feeds two 1 kΩ resistors in series, and the output is taken across the lower one. A 1 kΩ load is then connected across that lower resistor. What is the output voltage?",
    "options": {
      "A": "6 V, because a properly built divider is never affected by whatever load is attached.",
      "B": "3 V, because the new load takes one quarter of the source voltage.",
      "C": "4 V, because the lower leg falls to 500 ohms in a 1,500 ohm circuit.",
      "D": "8 V, because a load in parallel raises the voltage across the lower resistor."
    },
    "answer": "C",
    "explanation": "The load and the lower resistor in parallel equal 500 ohms. With the 1,000 ohm top resistor, the total is 1,500 ohms, so the output is 12 times 500 over 1,500, which is 4 V. Any real divider is affected by loading, so staying at 6 V is wrong. A quarter of the source has no basis in the numbers. Adding a parallel load lowers the resistance of the lower leg, which lowers its voltage and cannot raise it.",
    "id": 65
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "A technician expects 60 V across the parallel pair in a circuit with a 20 Ω series resistor feeding two 40 Ω resistors on 120 V. She measures 80 V across the pair and 2 A of total current. What is the most likely cause?",
    "options": {
      "A": "The 20 ohm series resistor has shorted, bypassing its resistance entirely and raising current.",
      "B": "One 40 ohm parallel resistor has opened, leaving a single 40 ohm path.",
      "C": "One of the 40 ohm parallel resistors has shorted, raising current above 3 A.",
      "D": "The source has dropped to 80 V while every resistor remains healthy and unchanged."
    },
    "answer": "B",
    "explanation": "Normally the pair is 20 ohms, total resistance is 40 ohms, current is 3 A, and the pair sees 60 V. With one resistor open, only 40 ohms remains in the pair, total resistance is 60 ohms, current is 2 A, and the pair sees 80 V, matching the readings. A shorted series resistor would send 6 A and put the full source across the pair. A shorted branch resistor would raise current sharply. A sagging source would cut the pair voltage to 40 V.",
    "id": 66
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "Which statement about current in a circuit with one series resistor and a parallel pair is correct?",
    "options": {
      "A": "Current is identical in every resistor, because they are all connected to one source.",
      "B": "Each parallel branch carries the full total current, while the series resistor carries half.",
      "C": "The series resistor carries less current than the sum of the two branch currents.",
      "D": "The series resistor carries the total current, equal to the sum of branch currents."
    },
    "answer": "D",
    "explanation": "All the current leaving the source passes through the series resistor, then divides at the junction into the two branches, and the branch currents add back to that total. Equal current in every resistor happens only in a pure series string. A parallel branch can never carry the full total unless the other branch is open. If the series resistor carried less than the branch sum, current would be created from nothing, which violates the junction rule.",
    "id": 67
  },
  {
    "domain": "dc_circuits",
    "chapter": 7,
    "question": "A 54 V source drives two groups in series. Group A is an 18 Ω and a 9 Ω resistor in parallel. Group B is a 12 Ω and a 4 Ω resistor in parallel. What voltage appears across group A?",
    "options": {
      "A": "27 V, an equal split because each group contains exactly two resistors in parallel.",
      "B": "18 V, which is the voltage that appears across group B and not group A.",
      "C": "36 V, because group A is 6 ohms in a 9 ohm total.",
      "D": "40.5 V, because group A takes three quarters of the entire source voltage."
    },
    "answer": "C",
    "explanation": "Group A equals 6 ohms and group B equals 3 ohms, so the series total is 9 ohms and the current is 6 A. Group A then drops 6 times 6, which is 36 V, and group B drops 18 V. An equal split would apply only if the group resistances matched. The 18 V figure belongs to the smaller group. Three quarters of the source is not what the resistance ratio of two to one gives.",
    "id": 68
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "Which of the following copper conductors has the greatest cross-sectional area?",
    "options": {
      "A": "14 AWG, because larger gauge numbers always indicate thicker wire in the AWG system.",
      "B": "12 AWG, because it is the standard size used for general receptacle branch circuits.",
      "C": "10 AWG, because it carries the highest amperage found in typical residential wiring.",
      "D": "8 AWG, because smaller gauge numbers indicate larger conductors in the AWG system."
    },
    "answer": "D",
    "explanation": "In the American Wire Gauge system the numbers run backward, so 8 AWG at 16,510 circular mils is larger than the other three sizes listed. The claim that bigger numbers mean thicker wire reverses the scale and would put the thinnest conductor on top. Common use in receptacle circuits tells you nothing about area, and 12 AWG is smaller than both 10 and 8. Typical residential current levels do not determine size ranking either, since larger conductors exist.",
    "id": 69
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "A solid round copper wire measures 0.080 inch in diameter. What is its cross-sectional area in circular mils?",
    "options": {
      "A": "6,400 circular mils, found by squaring the diameter of 80 mils.",
      "B": "5,027 circular mils, found by multiplying the squared diameter by 0.7854.",
      "C": "80 circular mils, found by converting the diameter directly to mils.",
      "D": "25,600 circular mils, found by doubling the diameter of 80 mils and squaring."
    },
    "answer": "A",
    "explanation": "Converting 0.080 inch gives 80 mils, and the area in circular mils equals the diameter in mils squared, so 6,400. The value 5,027 is the area in square mils, which is a different unit and needs the pi over 4 factor. Stopping at 80 simply restates the diameter and never computes an area. Doubling before squaring gives four times the real area in a mistaken step, not twice, and the number would be wrong anyway.",
    "id": 70
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "A 120 V circuit has a 15 A load at the end of 80 feet of 12 AWG copper, measured one way. Using K of 12.9 and 6,530 circular mils, what is the voltage drop?",
    "options": {
      "A": "2.37 V, found by leaving out the return conductor from the length.",
      "B": "4.74 V, found by including both the outgoing and return conductors.",
      "C": "9.48 V, found by doubling the correct result a second time.",
      "D": "0.40 V, found by dividing the load current rather than multiplying it."
    },
    "answer": "B",
    "explanation": "The formula is 2 times 12.9 times 15 times 80 divided by 6,530, which equals 30,960 divided by 6,530, or 4.74 V. The factor of two counts the return conductor. Dropping it gives half the true drop, 2.37 V. Doubling the real answer again overstates the loss by a factor of two. Dividing by the current instead of multiplying produces a tiny number that is not related to the wire's resistance at all.",
    "id": 71
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "Six current-carrying 12 AWG copper THHN conductors share one conduit. Using the 90 degree column value of 30 A and an 80 percent adjustment factor, what is the adjusted ampacity?",
    "options": {
      "A": "30 A, because the insulation rating is not affected by the number of conductors.",
      "B": "25 A, because the 75 degree column applies without any adjustment factor.",
      "C": "20 A, because the 60 degree column is always used for conduit installations.",
      "D": "24 A, because the starting ampacity is multiplied by 0.80 for bundling."
    },
    "answer": "D",
    "explanation": "With four to six current-carrying conductors in a raceway, the adjustment factor is 80 percent, so 30 times 0.80 gives 24 A, which is below the 25 A terminal value and therefore governs. Ignoring the bundling factor leaves 30 A, which overstates what the conductors can carry without overheating. Using the 75 degree column with no adjustment skips the derating step. Always using the 60 degree column gives 20 A, which is not how the adjustment is applied.",
    "id": 72
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "In a standard U.S. wiring scheme, which insulation color identifies the grounded conductor, usually called the neutral?",
    "options": {
      "A": "Black, since it is the color used for the main circuit conductor.",
      "B": "White or gray, since these colors identify the grounded conductor.",
      "C": "Green, since it marks the conductor that carries return current.",
      "D": "Red, since it indicates the conductor connected to the neutral bar."
    },
    "answer": "B",
    "explanation": "White or gray insulation marks the grounded conductor, which carries return current in normal operation. Black is commonly used for an ungrounded hot conductor, and using it as a neutral would mislead anyone who works on the circuit later. Green, or green with a yellow stripe, is reserved for equipment grounding, which carries current only during a fault. Red is a hot conductor color, often used for a second ungrounded phase.",
    "id": 73
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "Using K equal to 12.9, what is the resistance of a single 250 foot length of 14 AWG copper conductor, with an area of 4,110 circular mils?",
    "options": {
      "A": "0.785 Ω, found by multiplying 12.9 by 250 and dividing by 4,110.",
      "B": "1.57 Ω, found by doubling the length to cover a complete round trip.",
      "C": "0.39 Ω, found by dividing the correct result by two in error.",
      "D": "7.85 Ω, found by misplacing the decimal point during the division."
    },
    "answer": "A",
    "explanation": "The formula R equals K times L over CM gives 12.9 times 250, which is 3,225, divided by 4,110, or 0.785 Ω for the one conductor. The 1.57 Ω figure would be the loop resistance of an out-and-back pair, but the question asks about one length. Dividing by two gives a value too small to fit the formula. A shifted decimal point makes the answer ten times too large and would suggest a far thinner wire.",
    "id": 74
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "For the same resistance and length, about how many times the circular mil area of copper does aluminum require, using K values of 12.9 and 21.2?",
    "options": {
      "A": "1.0 times, because both metals conduct current in exactly the same way.",
      "B": "1.64 times, found by dividing 21.2 by 12.9 to compare resistivity.",
      "C": "2.0 times, because aluminum is always exactly half as conductive as copper.",
      "D": "0.61 times, found by dividing 12.9 by 21.2 and using that ratio."
    },
    "answer": "B",
    "explanation": "Resistance is proportional to K divided by area, so equal resistance requires area to scale with K. The ratio 21.2 over 12.9 is about 1.64. Equal area would give unequal resistance because the two metals have different resistivities. A factor of exactly two is a rounded rule that overstates the difference. The inverted ratio, 0.61, describes how well aluminum conducts compared with copper, not how much more area it needs.",
    "id": 75
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "A copper winding at 20 degrees Celsius is heated to 70 degrees Celsius. With alpha near 0.00393 per degree, what happens to its resistance?",
    "options": {
      "A": "It falls by about 20 percent, because heated metal has more free electrons.",
      "B": "It stays the same, because resistance depends only on length and area.",
      "C": "It rises by about 39 percent, because alpha is applied as a percentage.",
      "D": "It rises by about 20 percent, because 50 degrees times 0.00393 is 0.197."
    },
    "answer": "D",
    "explanation": "The change factor is alpha times the temperature rise, 0.00393 times 50, which is 0.197, so resistance climbs by about 20 percent. Copper resistance increases with heat because atomic vibration scatters moving electrons more often, so a fall is wrong. Resistance does depend on temperature as well as length and area. Reading alpha as a percentage per degree inflates the answer to nearly double the real figure.",
    "id": 76
  },
  {
    "domain": "wiring",
    "chapter": 8,
    "question": "A 10 AWG copper conductor has a table ampacity of 40 A in the 90 degree column. What is the usual maximum overcurrent device rating under the small conductor rule?",
    "options": {
      "A": "20 A, the limit that applies to 12 AWG copper rather than 10 AWG.",
      "B": "35 A, the table ampacity listed for 10 AWG in the 75 degree column.",
      "C": "30 A, the small conductor limit that applies to 10 AWG copper.",
      "D": "40 A, the table ampacity listed for 10 AWG in the 90 degree column."
    },
    "answer": "C",
    "explanation": "Section 240.4(D) caps protection of 10 AWG copper at 30 A in most cases, even though the table lists a higher ampacity for the conductor. The 20 A figure is the cap for 12 AWG, which is a smaller wire. The 75 degree table value of 35 A and the 90 degree value of 40 A are ampacities, not protection limits, and using either would allow a breaker larger than the rule permits.",
    "id": 77
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "A four-band resistor has bands of red, violet, orange, and gold, read in that order. What are its value and tolerance?",
    "options": {
      "A": "27,000 ohms with a tolerance of plus or minus 5 percent.",
      "B": "2,700 ohms with a tolerance of plus or minus 10 percent.",
      "C": "270,000 ohms with a tolerance of plus or minus 5 percent.",
      "D": "27,000 ohms with a tolerance of plus or minus 10 percent."
    },
    "answer": "A",
    "explanation": "Red and violet give the digits 2 and 7, orange as a multiplier means times 1,000, so the value is 27,000 ohms. Gold as the tolerance band means plus or minus 5 percent. A value of 2,700 would require a red multiplier. A value of 270,000 would require a yellow multiplier. Silver, not gold, marks 10 percent tolerance, so the 27,000 ohm answer with plus or minus 10 percent mixes a correct value with the wrong tolerance.",
    "id": 78
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "A 4,700 ohm resistor has a 5 percent tolerance. What range of measured values is acceptable?",
    "options": {
      "A": "4,230 to 5,170 ohms, found by applying 10 percent in each direction.",
      "B": "4,653 to 4,747 ohms, found by applying 1 percent in each direction.",
      "C": "4,700 to 4,935 ohms, found by applying 5 percent in the upward direction only.",
      "D": "4,465 to 4,935 ohms, found by applying 5 percent in each direction."
    },
    "answer": "D",
    "explanation": "Five percent of 4,700 is 235, so the part may read from 4,465 up to 4,935 ohms. Applying ten percent doubles the spread and would accept parts that are out of tolerance. Applying one percent makes the window too narrow and would reject good parts. Tolerance works in both directions, so a range that starts at the marked value and extends only upward misreads what plus or minus means.",
    "id": 79
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "A 330 ohm carbon resistor rated 1/4 watt is connected across a 12 V supply. What power does it dissipate, and is it within its rating?",
    "options": {
      "A": "0.036 W, found by dividing voltage by resistance, so the part is safe.",
      "B": "0.44 W, which exceeds the 0.25 W rating, so the part will overheat.",
      "C": "0.22 W, found by halving the result, so the part stays within its rating.",
      "D": "3,960 W, found by multiplying the voltage by the resistance, so it fails."
    },
    "answer": "B",
    "explanation": "Power equals voltage squared divided by resistance, so 144 divided by 330 gives about 0.44 W, which is nearly double the rating. Dividing voltage by resistance gives current in amperes, about 0.036 A, not power. Halving the result has no basis in the formula and would wrongly pass an overloaded part. Multiplying voltage by resistance gives a meaningless number in no useful unit.",
    "id": 80
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "A storage water heater is rated 4,500 W at 240 V and counts as a continuous load. What is the smallest standard breaker rating that suits the branch circuit?",
    "options": {
      "A": "25 A, because 18.75 A times 1.25 gives 23.4 A, rounded up.",
      "B": "20 A, because it is the next standard size above the 18.75 A running current.",
      "C": "30 A, because every continuous load must use the largest breaker its wire permits.",
      "D": "40 A, because the breaker should be twice the running current of the load."
    },
    "answer": "A",
    "explanation": "Running current is 4,500 divided by 240, or 18.75 A, and the continuous load rule multiplies it by 1.25, giving 23.4 A. The next standard size at or above that value is 25 A. A 20 A breaker would be below the required minimum. A 30 A breaker is larger than needed and is no rule of practice. Doubling the running current has no support in the code and would exceed what 10 AWG copper should carry.",
    "id": 81
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "What does the interrupting rating of a fuse or circuit breaker state?",
    "options": {
      "A": "The normal current the device can carry continuously without opening.",
      "B": "The voltage at which the device begins to open on an overload.",
      "C": "The length of time the device takes to open at its rated current.",
      "D": "The largest fault current the device can safely open without being destroyed."
    },
    "answer": "D",
    "explanation": "The interrupting rating is a limit on fault current, set so a short circuit does not rupture the device. The continuous carrying rating is the ampere rating, which is a separate marking. A voltage at which the device opens is not how any rating is defined, since voltage rating tells the circuit voltage the device can handle. Time to open is described by a trip curve, not by a single interrupting rating.",
    "id": 82
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "A lamp stays dark with its wall switch in the ON position, and the lamp is known to be good. A voltmeter across the switch terminals reads 120 V. What does that indicate?",
    "options": {
      "A": "The neutral conductor is open, since voltage appears across the closed switch.",
      "B": "The switch contacts are not closing, so full supply voltage appears across them.",
      "C": "The lamp is shorted, which would also place 120 V across the switch.",
      "D": "The breaker has tripped, which leaves 120 V present across the switch contacts."
    },
    "answer": "B",
    "explanation": "Contacts that are truly closed have almost no resistance, so the meter would read nearly zero. Reading full voltage across them means they are open despite the handle position. An open neutral with a closed switch would also show near zero volts across the switch. A shorted lamp would draw heavy current and likely trip the breaker, not leave the switch carrying full voltage. A tripped breaker removes voltage entirely, so the meter would read zero.",
    "id": 83
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "Which switch type has one common terminal that connects to either of two other terminals?",
    "options": {
      "A": "Single-pole, single-throw, which opens or closes one path only.",
      "B": "Double-pole, single-throw, which opens or closes two paths together.",
      "C": "Single-pole, double-throw, which routes one common terminal to either path.",
      "D": "Double-pole, double-throw, which switches two separate circuits between two positions each."
    },
    "answer": "C",
    "explanation": "A single-pole, double-throw switch has one pole that can touch either of two throws, and that is the basis of a three-way switch. A single-pole, single-throw device has only an open and a closed position for one path. A double-pole, single-throw unit controls two paths at once but has no alternate destination. A double-pole, double-throw unit has two common terminals, so it does not match a description of a single common terminal.",
    "id": 84
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "A 15 A fuse in a lighting circuit keeps blowing. An assistant suggests installing a 30 A fuse. What is the correct action?",
    "options": {
      "A": "Install the 30 A fuse, since a larger fuse will stop the interruptions.",
      "B": "Bridge the fuse holder with a short wire until the cause is found.",
      "C": "Install a 20 A fuse, because a small increase is acceptable for lighting.",
      "D": "Find and correct the cause, then install a fuse of the original rating."
    },
    "answer": "D",
    "explanation": "A fuse is sized to protect the wiring, so repeated blowing signals an overload or a fault that must be found and repaired. A larger fuse would let the wire carry more current than it can handle and could start a fire. Bridging the holder removes protection entirely. A modest increase to 20 A still exceeds what 14 AWG wire on a lighting circuit may be protected at, so it is just as unsafe.",
    "id": 85
  },
  {
    "domain": "components",
    "chapter": 9,
    "question": "A linear 10 kilohm potentiometer is connected across a 12 V supply. The wiper is one quarter of the way up from the grounded end, with no load attached. What is the output voltage?",
    "options": {
      "A": "3 V, because the output is a quarter of the supply voltage.",
      "B": "9 V, because the output is measured from the wrong end of the track.",
      "C": "2.5 V, because the output is one quarter of the 10 kilohm resistance.",
      "D": "6 V, because the wiper always returns the midpoint voltage in a divider."
    },
    "answer": "A",
    "explanation": "With a linear track, the output voltage is proportional to wiper position, so one quarter of 12 V is 3 V. Nine volts would be the output if the wiper sat three quarters of the way up. The figure 2.5 mixes a resistance fraction with a voltage and has the wrong unit and value. A midpoint result is only true when the wiper is halfway along the track, not for every position.",
    "id": 86
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "A fully charged 12 V lead-acid battery reads about 12.6 V at rest. How many cells in series are inside the case?",
    "options": {
      "A": "Four cells, since each lead-acid cell produces about 3.2 V when fully charged.",
      "B": "Eight cells, since each lead-acid cell produces about 1.5 V when fully charged.",
      "C": "Six cells, since each lead-acid cell produces about 2.1 V when fully charged.",
      "D": "Twelve cells, since each lead-acid cell produces about 1.0 V when fully charged."
    },
    "answer": "C",
    "explanation": "A lead-acid cell rests near 2.1 V, so six cells in series give about 12.6 V. Four cells would require 3.2 V each, which is the figure for a lithium iron phosphate cell, not lead-acid. Eight cells at 1.5 V matches alkaline chemistry. Twelve cells at 1 V each matches no common secondary cell and would give a battery with a very different nominal voltage than the one described.",
    "id": 87
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "Four 6 V, 220 Ah batteries are connected in series. What are the voltage and capacity of the string?",
    "options": {
      "A": "6 V and 880 Ah, because series connection adds the capacity only.",
      "B": "24 V and 880 Ah, because series connection adds both voltage and capacity.",
      "C": "6 V and 220 Ah, because series connection changes neither quantity at all.",
      "D": "24 V and 220 Ah, because series connection adds voltage and keeps capacity."
    },
    "answer": "D",
    "explanation": "In a series string the voltages add, giving 24 V, while the same current flows through each battery, so the ampere-hour capacity stays at 220. Adding only capacity describes a parallel bank, and that would keep 6 V. Adding both voltage and capacity would store more energy than the four units hold. Changing neither value ignores that the four voltages stack.",
    "id": 88
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "A bank is built from four 12 V, 100 Ah batteries arranged as two series strings of two batteries, with the strings connected in parallel. How much energy does the bank store?",
    "options": {
      "A": "4,800 Wh, found by multiplying 24 V by 200 Ah.",
      "B": "1,200 Wh, found by multiplying 12 V by 100 Ah only once.",
      "C": "2,400 Wh, found by multiplying 24 V by 100 Ah only.",
      "D": "9,600 Wh, found by multiplying 24 V by 400 Ah in total."
    },
    "answer": "A",
    "explanation": "Each string is 24 V and 100 Ah, and two strings in parallel give 24 V and 200 Ah, so energy is 24 times 200, which is 4,800 Wh. This also equals four batteries at 1,200 Wh each. A single battery holds 1,200 Wh. Counting only one string gives 2,400 Wh. Adding every battery's capacity as though all were in parallel, then multiplying by 24 V, double counts the voltage.",
    "id": 89
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "A battery with an open-circuit voltage of 12.6 V and an internal resistance of 0.025 Ω supplies 120 A to a starter. What is the terminal voltage during cranking?",
    "options": {
      "A": "12.6 V, because open-circuit voltage is the value at the terminals under load.",
      "B": "9.6 V, because the 3.0 V internal drop is subtracted from 12.6 V.",
      "C": "3.0 V, because the terminal voltage equals the voltage lost internally.",
      "D": "15.6 V, because the internal drop is added to the open-circuit voltage."
    },
    "answer": "B",
    "explanation": "The internal drop is current times resistance, 120 times 0.025, or 3.0 V, and the terminal voltage is the open-circuit voltage minus that drop, giving 9.6 V. Keeping 12.6 V ignores the internal resistance entirely. Reporting 3.0 V mistakes the loss for the output. Adding the drop would give a terminal voltage higher than the source generates, which is impossible for a discharging battery.",
    "id": 90
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "A 12 V, 100 Ah battery may be discharged to 50 percent depth and runs a 240 W DC load with no losses. About how long will it run?",
    "options": {
      "A": "5.0 hours, found by using all 100 Ah of rated capacity.",
      "B": "0.4 hours, found by dividing the 20 A current by 50 Ah.",
      "C": "2.5 hours, found by dividing 50 Ah usable by 20 A.",
      "D": "1.25 hours, found by halving the usable capacity a second time."
    },
    "answer": "C",
    "explanation": "The load current is 240 divided by 12, or 20 A. Usable capacity at 50 percent depth is 50 Ah, so the time is 50 divided by 20, or 2.5 hours. Using all 100 Ah ignores the depth limit. Dividing current by capacity inverts the ratio and gives a number with the wrong meaning. Halving the usable capacity again applies the depth limit twice, which understates the runtime.",
    "id": 91
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "What is the recommended order when disconnecting the terminals from a vehicle battery?",
    "options": {
      "A": "Remove the negative terminal first, and reconnect it last during installation.",
      "B": "Remove the positive terminal first, and reconnect it first during installation.",
      "C": "Remove both terminals at the same moment using two wrenches together.",
      "D": "Remove whichever terminal is easier to reach, since order makes no difference."
    },
    "answer": "A",
    "explanation": "Removing the grounded negative first breaks the path through the vehicle body, so a wrench that touches metal while loosening the positive clamp cannot complete a short circuit. Reconnecting it last follows the same logic. Starting with the positive leaves the body connected to the negative and allows a wrench short. Two wrenches at once invites a slip. Order does matter, since a mistake can release a very large current.",
    "id": 92
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "A flooded 12 V lead-acid battery has rested for several hours and reads 12.2 V with no load. What is its approximate state of charge?",
    "options": {
      "A": "About 100 percent, because any reading above 12 V means a full battery.",
      "B": "About 50 percent, because 12.2 V sits near the half-charged value.",
      "C": "About 25 percent, because 12.2 V is close to the discharged limit.",
      "D": "About 75 percent, because 12.2 V is just below the fully charged value."
    },
    "answer": "B",
    "explanation": "For a rested flooded battery, roughly 12.7 V is full, 12.4 V is three quarters, 12.2 V is half, and 12.0 V is one quarter. Treating anything above 12 V as full ignores the steps between. A quarter charge corresponds to about 12.0 V, not 12.2 V. The three quarter figure is closer to 12.4 V. The values vary slightly between makers, so the reading is only an estimate.",
    "id": 93
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "Which hazardous gas is produced when a flooded lead-acid battery is being charged?",
    "options": {
      "A": "Oxygen alone, which can only support a fire and cannot burn by itself.",
      "B": "Carbon monoxide, which forms whenever lead plates contact the sulfuric acid.",
      "C": "Hydrogen, which can form an explosive mixture with air near sparks.",
      "D": "Chlorine, which escapes from the electrolyte during the absorption stage of charging."
    },
    "answer": "C",
    "explanation": "Charging splits water in the electrolyte into hydrogen and oxygen, and hydrogen in air becomes explosive above roughly 4 percent concentration, so sparks near a charging battery are dangerous. Oxygen is produced too, but the flammable gas is the main hazard. Carbon monoxide comes from combustion, not from lead-acid chemistry. Chlorine would require a chloride in the electrolyte, which sulfuric acid does not contain.",
    "id": 94
  },
  {
    "domain": "sources",
    "chapter": 10,
    "question": "A tool pack must produce about 11 V nominal using lithium-ion cells rated 3.7 V each. How many cells should be connected in series?",
    "options": {
      "A": "Two cells in series, which together give a nominal pack voltage of 7.4 V.",
      "B": "Three cells in series, which give a nominal pack voltage of 11.1 V.",
      "C": "Four cells in series, which together give a nominal pack voltage of 14.8 V.",
      "D": "Six cells in series, which together give a nominal pack voltage of 22.2 V."
    },
    "answer": "B",
    "explanation": "Series cell voltages add, so three cells at 3.7 V give 11.1 V, which matches the target. Two cells provide only 7.4 V, too low for the tool. Four cells provide 14.8 V, a common pack for a different class of tool, and would overdrive an 11 V motor. Six cells give 22.2 V, twice the requirement. Always compute the sum of the nominal values and compare it to the needed voltage.",
    "id": 95
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "Using the right-hand rule for a coil and conventional current, what does the extended thumb indicate when the fingers curl in the direction of current?",
    "options": {
      "A": "The north pole end of the electromagnet formed by the coil.",
      "B": "The south pole end of the electromagnet formed by the coil.",
      "C": "The direction in which electrons move through the wire of the coil.",
      "D": "The direction of the induced voltage that opposes any change in current."
    },
    "answer": "A",
    "explanation": "With the fingers following conventional current around the turns, the thumb points out of the north end of the coil. The south end is the opposite end, so naming it reverses the rule. Electrons move opposite to conventional current, and the rule is not about electron motion. The direction of an opposing induced voltage belongs to Lenz's law, a separate idea that does not describe the pole of a coil.",
    "id": 96
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "A coil has 800 turns and carries 1.5 A. What is its magnetomotive force?",
    "options": {
      "A": "533 ampere-turns, found by dividing the number of turns by the current.",
      "B": "1,200 ampere-turns, found by multiplying the number of turns by the current.",
      "C": "2,400 ampere-turns, found by multiplying the result by two for both poles.",
      "D": "800 ampere-turns, found by using the number of turns without the current."
    },
    "answer": "B",
    "explanation": "Magnetomotive force equals turns times current, so 800 times 1.5 gives 1,200 ampere-turns. Dividing turns by current gives a figure with no meaning in this context. Doubling the result because a magnet has two poles is not part of the formula. Using only the turns count ignores the current, which is half of what produces the field, so the coil would have no strength at zero current.",
    "id": 97
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "A conductor 0.40 m long moves at right angles through a uniform field of 0.6 T at 5 m/s. What voltage is induced in it?",
    "options": {
      "A": "3.0 V, found by multiplying the flux density by the speed alone.",
      "B": "0.24 V, found by multiplying the flux density by the length alone.",
      "C": "1.2 V, found by multiplying flux density, length, and speed together.",
      "D": "12 V, found by multiplying the correct result by ten in error."
    },
    "answer": "C",
    "explanation": "The induced voltage is B times l times v, which is 0.6 times 0.40 times 5, or 1.2 V. Leaving out the length gives 3.0 V, which treats the wire as one meter long. Leaving out the speed gives 0.24 V, which would suggest voltage appears even without motion. A factor of ten has no basis, and it comes from a slip in placing the decimal point.",
    "id": 98
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "A coil of 150 turns experiences a flux change of 0.006 Wb in 0.03 s. What average voltage is induced?",
    "options": {
      "A": "0.2 V, found by dividing the flux change by the time only.",
      "B": "0.9 V, found by multiplying the turns by the flux change only.",
      "C": "4.5 V, found by multiplying the turns by the time only.",
      "D": "30 V, found by multiplying turns by the flux change rate."
    },
    "answer": "D",
    "explanation": "The rate of change is 0.006 divided by 0.03, or 0.2 Wb per second, and multiplying by 150 turns gives 30 V. Stopping at the rate gives 0.2 and forgets the turns. Multiplying turns by flux change without dividing by time loses the speed of the change. Multiplying turns by the time interval produces a number that grows when the change is slower, which is the reverse of how induction works.",
    "id": 99
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "A 0.20 m length of conductor lies at right angles to a 0.8 T field and carries 25 A. What force acts on it?",
    "options": {
      "A": "20 N, found by multiplying the flux density by the current alone.",
      "B": "0.16 N, found by multiplying the flux density by the length alone.",
      "C": "4 N, found by multiplying flux density, current, and length together.",
      "D": "125 N, found by dividing the current by the conductor length."
    },
    "answer": "C",
    "explanation": "Force equals B times I times l, so 0.8 times 25 times 0.20 gives 4 N. Omitting the length gives 20 N and treats the wire as one meter long. Omitting the current gives 0.16 N, as if the wire carried none. Dividing current by length does not appear anywhere in the force law and gives a large number that has no physical meaning for this wire.",
    "id": 100
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "Which statement correctly describes Lenz's law?",
    "options": {
      "A": "The induced current flows in a direction that reinforces the change that produced it.",
      "B": "The induced current flows in a direction that opposes the change that produced it.",
      "C": "The induced current always flows in the same direction regardless of the change.",
      "D": "The induced current appears only when a magnet is permanently fixed in place."
    },
    "answer": "B",
    "explanation": "Lenz's law states that the induced current opposes the cause of the change, which is how energy is conserved. A reinforcing current would feed on itself and create energy from nothing. The direction is not fixed, because it reverses when the change reverses. Induction requires a changing flux or relative motion, so a magnet held permanently fixed in place near a stationary coil induces nothing.",
    "id": 101
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "Two parallel bus bars carry a large fault current in opposite directions. What happens between them?",
    "options": {
      "A": "They repel each other, so bracing must resist forces pushing the bars apart.",
      "B": "They attract each other, so bracing must resist forces pulling the bars together.",
      "C": "No force acts between them because alternating current has no steady field.",
      "D": "A force acts only on the bar carrying the larger current of the two."
    },
    "answer": "A",
    "explanation": "Opposite currents in parallel conductors push the conductors apart, and the force grows with the product of the two currents, so fault conditions create the largest forces. Attraction occurs when the currents run in the same direction. Alternating current still creates forces, which pulse at twice the line frequency. The forces between two conductors are equal and opposite, so both bars feel the same push.",
    "id": 102
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "Why is soft iron chosen for the core of a relay coil instead of hardened steel?",
    "options": {
      "A": "Soft iron keeps its magnetism for years and holds the armature closed.",
      "B": "Soft iron magnetizes easily and loses most magnetism when the current stops.",
      "C": "Soft iron has a lower permeability than steel and limits the coil current.",
      "D": "Soft iron conducts the coil current and removes the need for copper wire."
    },
    "answer": "B",
    "explanation": "A relay must release when its coil is de-energized, so the core needs low residual magnetism, and soft iron provides that. Keeping magnetism for years describes hardened steel, which would make the armature stick. Soft iron has high permeability, not low, which is why it makes a strong electromagnet. The coil current flows in the copper winding, and the iron core is not used to carry that current.",
    "id": 103
  },
  {
    "domain": "magnetism",
    "chapter": 11,
    "question": "A magnetic flux density is 0.02 T. What is this value in gauss?",
    "options": {
      "A": "2 gauss, found by multiplying the tesla value by 100 in error.",
      "B": "20 gauss, found by multiplying the tesla value by 1,000 in error.",
      "C": "200 gauss, found by multiplying the tesla value by 10,000.",
      "D": "2,000 gauss, found by multiplying the tesla value by 100,000."
    },
    "answer": "C",
    "explanation": "One tesla equals 10,000 gauss, so 0.02 T equals 200 gauss. The values of 2 and 20 gauss come from using the wrong conversion factor and give a field far too weak for a 0.02 T reading. The value of 2,000 gauss uses a factor ten times too big, and it would describe 0.2 T. Always check the order of magnitude against a known reference, such as a small magnet near 50 gauss.",
    "id": 104
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "How should a voltmeter be connected to measure the voltage across a load?",
    "options": {
      "A": "In series with the load, so the entire load current flows through the meter.",
      "B": "In series with the source, so the meter carries the current of the whole circuit.",
      "C": "In parallel with the load, with one lead on each side of the load.",
      "D": "Across the source only, since a load voltage cannot be measured directly."
    },
    "answer": "C",
    "explanation": "Voltage is the difference in potential between two points, so the meter must bridge those points, one lead on each side of the load. Placing it in series would force the load current through a meter with very high resistance and stop the circuit from working. Putting it in series with the source has the same effect. A load voltage can be measured directly, and it is often the most useful reading.",
    "id": 105
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "How must an ammeter be connected to measure the current in a circuit?",
    "options": {
      "A": "In parallel with the load, across both of its terminals at once.",
      "B": "In series with the circuit, so the current flows through the meter.",
      "C": "In parallel with the source, across the supply terminals at the panel.",
      "D": "Beside the circuit with no electrical connection to any conductor at all."
    },
    "answer": "B",
    "explanation": "An ammeter measures the flow of current, so it has to sit in the path that the current takes. Placing it in parallel across a load or a source gives it almost no resistance to see, creating a short circuit that blows the meter fuse or worse. A meter that sits beside a circuit with no connection would need to be a clamp type, which works through a magnetic field instead.",
    "id": 106
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "Why must a circuit be de-energized before a resistance measurement is taken?",
    "options": {
      "A": "Resistance changes only while the circuit is hot, so a live reading is too high.",
      "B": "The ohmmeter shows only the sum of all voltages when a circuit is live.",
      "C": "A live circuit cannot be touched with leads and gives only a blank screen.",
      "D": "The meter supplies its own test voltage, and outside voltage gives false readings or damage."
    },
    "answer": "D",
    "explanation": "An ohmmeter measures resistance by driving a small current from its internal battery and reading the result, so any outside voltage upsets that measurement and can burn out the meter. Resistance does not change simply because power is applied in the way suggested. An ohmmeter does not measure voltage sums. A live circuit can be touched with leads, which is the danger, and the screen would show a wrong number, not a blank.",
    "id": 107
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "A meter movement has a full-scale current of 1 mA and a coil resistance of 50 Ω. What series multiplier makes it read 10 V at full scale?",
    "options": {
      "A": "9,950 Ω, found by subtracting the coil resistance from 10,000 Ω.",
      "B": "10,000 Ω, found by dividing 10 V by 1 mA and ignoring the coil.",
      "C": "10,050 Ω, found by adding the coil resistance to the total required.",
      "D": "500 Ω, found by dividing 10 V by 0.02 A in error."
    },
    "answer": "A",
    "explanation": "The total resistance at full scale is 10 V divided by 0.001 A, or 10,000 Ω. The movement supplies 50 Ω of it, so the multiplier supplies the remaining 9,950 Ω. Using the whole 10,000 Ω as the multiplier forgets the coil, which makes the meter read slightly low. Adding the coil makes the total too large. The value of 500 Ω comes from an invented current and would let the meter pass far too much current.",
    "id": 108
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "A 10 V source feeds two 1 MΩ resistors in series. A voltmeter with 10 MΩ input resistance is connected across the lower resistor. What does it read?",
    "options": {
      "A": "5.00 V, because a voltmeter never disturbs the circuit that it measures.",
      "B": "5.24 V, the voltage across the upper resistor instead of the lower one.",
      "C": "3.33 V, found by treating the meter as a 1 MΩ load across the resistor.",
      "D": "4.76 V, because the meter and lower resistor combine to about 0.909 MΩ."
    },
    "answer": "D",
    "explanation": "The 10 MΩ meter in parallel with the 1 MΩ resistor makes 0.909 MΩ, so the divider gives 10 times 0.909 divided by 1.909, or 4.76 V. A real meter always loads a circuit slightly, so a perfect 5.00 V cannot appear. The 5.24 V figure is what remains across the upper resistor. Treating the meter as 1 MΩ would give 3.33 V, but that overstates its loading by tenfold.",
    "id": 109
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "A digital meter shows 120.0 V with an accuracy of plus or minus (0.5 percent of reading plus 2 digits), where one digit is 0.1 V. What range contains the true voltage?",
    "options": {
      "A": "119.4 V to 120.6 V, found by applying the percentage error alone.",
      "B": "119.2 V to 120.8 V, found by adding the percentage and digit errors.",
      "C": "119.8 V to 120.2 V, found by applying the two digit error alone.",
      "D": "118.0 V to 122.0 V, found by doubling the combined error twice."
    },
    "answer": "B",
    "explanation": "The percentage part is 0.6 V and the digit part is 0.2 V, and their sum, 0.8 V, sets a band from 119.2 to 120.8 V. Using the percentage alone leaves out the digit uncertainty. Using the two digits alone ignores the percentage part, which is larger here. Doubling the combined error twice invents a spread of 2 V that the specification does not allow and would make a good meter seem poor.",
    "id": 110
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "A technician clamps a clamp meter around an entire two-conductor cord, hot and neutral together, feeding a running heater. What does the meter read?",
    "options": {
      "A": "The full running current, since the clamp senses both conductors at once.",
      "B": "Double the running current, since the two conductors both carry the load.",
      "C": "Nearly zero, because the opposite currents in the two conductors cancel their fields.",
      "D": "The supply voltage, since the clamp senses the electric field around the cord."
    },
    "answer": "C",
    "explanation": "The current going out on the hot conductor equals the current returning on the neutral, and their magnetic fields point in opposite directions, so the net field through the jaws is nearly zero. The meter then senses almost nothing. The clamp cannot add the two currents, since the fields cancel instead of stacking. A clamp meter senses magnetic fields, not electric fields, and it does not measure voltage in this mode.",
    "id": 111
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "What procedure confirms that a reading of zero volts on a circuit can be trusted?",
    "options": {
      "A": "Touch the circuit with a non-contact detector, which proves it is dead.",
      "B": "Test the meter on a known live source before and after the circuit.",
      "C": "Measure only between the hot conductor and neutral, then trust the result.",
      "D": "Read the meter twice on the circuit and compare both of the readings."
    },
    "answer": "B",
    "explanation": "The live-dead-live method proves the meter was working just before and just after it read zero, which rules out a failed meter. A non-contact detector can miss a live conductor through shielding or a weak battery, so it does not prove a circuit dead. Testing only one pair of conductors can miss voltage on the others. Repeating a reading on the circuit with a bad meter simply repeats the same wrong answer.",
    "id": 112
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "What is the peak voltage of a 120 V RMS sine wave?",
    "options": {
      "A": "About 170 V, found by multiplying 120 V by 1.414.",
      "B": "About 85 V, found by multiplying 120 V by 0.707.",
      "C": "Exactly 120 V, since the RMS value is the highest value reached.",
      "D": "Exactly 240 V, since the peak is always double the nominal voltage."
    },
    "answer": "A",
    "explanation": "For a sine wave the peak equals the RMS value times the square root of 2, so 120 times 1.414 gives about 170 V. Multiplying by 0.707 goes in the wrong direction and gives a value below the RMS figure. The RMS value is a heating equivalent, not a maximum, so the peak is higher. A peak of exactly double has no basis for a sine wave and would be 240 V only by coincidence.",
    "id": 113
  },
  {
    "domain": "instruments",
    "chapter": 12,
    "question": "A high-impedance meter reads 75 V on a disconnected, unloaded wire that runs beside an energized cable. A low-impedance setting drops the reading to near zero. What explains this?",
    "options": {
      "A": "The wire carries real line voltage that the low setting happens to hide.",
      "B": "The wire is defective and has a high resistance that attenuates the voltage.",
      "C": "The meter battery is weak and is generating a false voltage on its own.",
      "D": "Capacitive coupling creates a phantom voltage that collapses when the meter loads it."
    },
    "answer": "D",
    "explanation": "A wire running beside an energized one couples to it through capacitance, and a very high-impedance meter detects that tiny coupled current as a large voltage. A low-impedance mode draws enough current to collapse it. Real line voltage would stay near its value under a modest load. A high-resistance wire does not create voltage. A weak battery makes a display unreliable but does not produce a 75 V reading on a bare conductor.",
    "id": 114
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "A technician needs the time for one full cycle of a 60 hertz supply, for use when setting a test instrument. What value should be used?",
    "options": {
      "A": "Exactly 60 milliseconds, because frequency in hertz and period in milliseconds are always the same number",
      "B": "About 16.7 milliseconds, found by dividing one second by the sixty cycles that occur in it",
      "C": "About 1.67 milliseconds, found by dividing one tenth of a second by the sixty cycles",
      "D": "Exactly 60 seconds, because one hertz is defined as one cycle every single second"
    },
    "answer": "B",
    "explanation": "Period is the reciprocal of frequency, so one second divided by 60 cycles gives 0.01667 second, or 16.7 milliseconds per cycle. The claim of 60 milliseconds treats frequency and period as the same number, which they never are. The claim of 1.67 milliseconds slips a factor of ten into the division. The claim of 60 seconds mixes up cycles per second with seconds per cycle, and would describe a wave far slower than any power supply.",
    "id": 115
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "A voltmeter reads 240 volts on a circuit in a workshop. About how high does the voltage rise at the instant of its positive peak?",
    "options": {
      "A": "About 170 volts, found by multiplying the reading by 0.707",
      "B": "Exactly 240 volts, because a meter always displays the highest voltage reached",
      "C": "About 480 volts, found by doubling the reading to account for both half cycles",
      "D": "About 339 volts, found by multiplying the rms reading by 1.414"
    },
    "answer": "D",
    "explanation": "A meter in the AC range displays the rms value, and the peak of a sine wave is 1.414 times that, so 240 x 1.414 gives 339.4 volts. Multiplying by 0.707 goes the wrong way and produces a number below the rms value, which no peak can be. Meters do not display the highest instantaneous voltage, so the reading is not the peak. Doubling the reading to 480 volts has no basis, since the true peak is only 1.414 times the rms value.",
    "id": 116
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "An oscilloscope is set to 20 volts per division. A sine wave occupies 8 divisions from its lowest point to its highest point. What is the approximate rms value?",
    "options": {
      "A": "About 56.6 volts, from a 160 volt span, an 80 volt peak and the 0.707 factor",
      "B": "About 80.0 volts, from taking half of the 160 volt span with no further conversion applied",
      "C": "About 113.1 volts, from taking 0.707 of the full 160 volt span",
      "D": "About 160.0 volts, from reading the full span of the wave directly"
    },
    "answer": "A",
    "explanation": "Eight divisions at 20 volts each is 160 volts peak-to-peak, so the peak is half of that, 80 volts, and the rms is 0.707 x 80, which is 56.6 volts. The figure of 80 volts is the peak, not the rms. The figure of 113.1 volts comes from treating the peak-to-peak reading as if it were the peak and then applying 0.707. The figure of 160 volts is the raw peak-to-peak span with no conversion at all.",
    "id": 117
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "A synchronous alternator has eight magnetic poles and is driven at 900 rpm. What frequency does it produce?",
    "options": {
      "A": "112.5 hertz, found by dividing the speed by the number of poles",
      "B": "60 hertz, found by multiplying poles by speed and dividing by 120",
      "C": "30 hertz, found by dividing poles by speed and multiplying by 60",
      "D": "7,200 hertz, found by multiplying poles by speed with no further division"
    },
    "answer": "B",
    "explanation": "The relationship is frequency equals poles times speed divided by 120, so 8 x 900 / 120 gives 60 hertz. Dividing speed by the number of poles gives a wrong quantity that has no meaning here, and it would give 112.5, which is not the alternator's frequency. Dividing poles by speed inverts the ratio and yields a tiny number, not 30. Multiplying poles by speed and stopping at that product leaves out the divisor of 120, which converts minutes to seconds and poles to pole pairs.",
    "id": 118
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "Two 60 hertz sine waves have the same peak value. Wave Y reaches its positive peak 4.17 milliseconds after wave X reaches its positive peak. What is the relationship between them?",
    "options": {
      "A": "Y lags X by 90 degrees, because 4.17 milliseconds is one quarter of the 16.7 millisecond period",
      "B": "Y leads X by 90 degrees, because it reaches its peak at a later point",
      "C": "Y lags X by 45 degrees, because 4.17 milliseconds is one eighth of the period",
      "D": "Y is in phase with X, because both waves have the same frequency and the same peak value"
    },
    "answer": "A",
    "explanation": "One period at 60 hertz lasts 16.67 milliseconds, and 4.17 milliseconds is a quarter of it, which equals 90 degrees; the wave that arrives later is the one that lags. Saying it leads reverses the time order, since a leading wave gets to each point first. A 45 degree shift would take only about 2.08 milliseconds. Equal frequency and equal peak values do not make two waves in phase, because phase depends on when each crosses zero or peaks.",
    "id": 119
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "A sine wave has a peak of 200 volts. The generator coil has turned 40 degrees past the point where the voltage was zero and rising. What is the instantaneous voltage?",
    "options": {
      "A": "80.0 volts, found by multiplying the peak by 40 percent",
      "B": "153.2 volts, found by multiplying the peak by the cosine of 40 degrees",
      "C": "128.6 volts, found by multiplying the peak by the sine of 40 degrees",
      "D": "141.4 volts, found by multiplying the peak by 0.707"
    },
    "answer": "C",
    "explanation": "The instantaneous value equals the peak times the sine of the angle, and sin 40 degrees is 0.6428, so 200 x 0.6428 is 128.6 volts. Taking 40 percent of the peak treats the angle as a percentage, which it is not. Using the cosine gives the value for the angle measured from the peak instead of from zero, so it is wrong here. The factor of 0.707 is the rms conversion, which equals the sine only at 45 degrees and has nothing to do with 40 degrees.",
    "id": 120
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "In a home with a 120/240 volt single-phase service, why do the two hot conductors measure 240 volts between them?",
    "options": {
      "A": "Each hot conductor carries twice the current of the neutral, which doubles the voltage between them",
      "B": "The two hot conductors are in phase, so their voltages multiply to give 240 volts",
      "C": "The utility feeds the two hot conductors from two separate generators running at different frequencies",
      "D": "The two hot conductors are 180 degrees apart, so their 120 volt values add"
    },
    "answer": "D",
    "explanation": "A center-tapped transformer winding makes the two ends opposite in polarity relative to the grounded center, so the 120 volt values add arithmetically to 240 volts. Voltage does not double because of current, and current has no effect on how the voltages relate. If the two conductors were in phase there would be no voltage difference between them at all, and voltages in any case add rather than multiply. Two generators at different frequencies would produce a constantly changing, unusable voltage between the conductors.",
    "id": 121
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "A resistive heater is connected to a 120 volt rms supply and delivers the same heat that a 120 volt battery would deliver to the same heater. What explains this equality?",
    "options": {
      "A": "The rms value is defined by equal heating effect, so 120 volts rms matches direct current",
      "B": "The peak value of 120 volts is the same as the rms value for all resistive loads",
      "C": "The average value over the full cycle is 120 volts for any sine wave at all",
      "D": "The frequency of 60 hertz cancels the difference between alternating and direct voltage"
    },
    "answer": "A",
    "explanation": "The rms value is the direct voltage that produces the same power in a resistor, which is the reason it is used on nameplates and meters. The peak of a 120 volt rms supply is about 170 volts, so the peak and rms values are different even for a resistive load. The average over a full cycle of any sine wave is zero. Frequency changes how fast the cycles repeat but does not make alternating and direct voltages equal.",
    "id": 122
  },
  {
    "domain": "ac_theory",
    "chapter": 13,
    "question": "A 12 ohm resistive heating element runs on a 120 volt rms supply. A new apprentice calculates the power using the peak voltage. What is the correct power, and what did the apprentice get?",
    "options": {
      "A": "The correct power is 600 watts, and the apprentice got 1,200 watts using the peak",
      "B": "The correct power is 1,440 watts, and the apprentice got 2,880 watts",
      "C": "The correct power is 2,400 watts, and the apprentice got 1,200 watts",
      "D": "The correct power is 1,200 watts, and the apprentice got about 2,400 watts"
    },
    "answer": "D",
    "explanation": "With rms voltage, power is 120 squared divided by 12, which is 14,400 / 12 = 1,200 watts. Using the 169.7 volt peak gives 28,800 / 12, which is 2,400 watts, double the real power, because squaring 1.414 doubles the result. The pairing that gives 600 watts has halved the real value, and the pairing that gives 1,440 watts has no basis in this circuit. The pairing that treats 2,400 watts as correct has the roles reversed.",
    "id": 123
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "Which statement correctly defines a coil with an inductance of one henry?",
    "options": {
      "A": "A coil that stores exactly one joule of energy whenever one ampere flows through it",
      "B": "A coil that has exactly one ohm of opposition to current at one hertz",
      "C": "A coil in which current changing one ampere each second induces one volt",
      "D": "A coil that produces one weber of flux when connected to one volt of direct current"
    },
    "answer": "C",
    "explanation": "One henry is defined by the induced voltage: a current changing at one ampere per second induces one volt in the coil. The stored energy of a coil equals half of L times I squared, so one henry at one ampere stores half a joule, not one. The reactance at one hertz is 6.28 ohms for one henry, not one ohm. A steady direct voltage causes a final current set by resistance and gives no fixed amount of flux per volt that defines the unit.",
    "id": 124
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "What is the inductive reactance of a 0.2 henry coil connected to a 60 hertz supply?",
    "options": {
      "A": "12.0 ohms, found by multiplying the frequency by the inductance alone",
      "B": "75.4 ohms, found by multiplying 2 pi by the frequency and the inductance",
      "C": "1.26 ohms, found by multiplying 2 pi by the inductance with no frequency",
      "D": "473.7 ohms, found by applying the 2 pi factor a second time"
    },
    "answer": "B",
    "explanation": "Inductive reactance equals 2 x pi x f x L, which is 6.283 x 60 x 0.2, or 75.4 ohms. Multiplying only the frequency and inductance gives 12 ohms and leaves out the 2 pi factor. Multiplying 2 pi by L alone gives 1.26 ohms and leaves out the frequency. Applying the 2 pi factor a second time to the correct answer gives 473.7 ohms, which double counts the angular constant.",
    "id": 125
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "A choke has an inductive reactance of 40 ohms at 60 hertz. The same choke is used on a circuit running at 180 hertz. What is its reactance there?",
    "options": {
      "A": "13.3 ohms, because reactance falls as frequency rises",
      "B": "40 ohms, because reactance depends only on the coil and not the frequency",
      "C": "360 ohms, because reactance rises with the square of the frequency",
      "D": "120 ohms, because reactance rises in direct proportion to the frequency"
    },
    "answer": "D",
    "explanation": "Inductive reactance is directly proportional to frequency, and 180 hertz is three times 60 hertz, so the reactance is 3 x 40, or 120 ohms. A fall to 13.3 ohms would describe a capacitor, not a coil. The reactance does depend on frequency, so it cannot stay at 40 ohms. Squaring the frequency ratio would give 360 ohms, but the relationship is linear, not a square.",
    "id": 126
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "Three air-core chokes of 1.5 henry, 2.5 henry and 4 henry are wired in series, far enough apart that their fields do not link. What is the total inductance?",
    "options": {
      "A": "0.76 henry, from adding the reciprocals and inverting the sum",
      "B": "1.5 henry, because a series string takes the smallest value",
      "C": "8.0 henry, from adding the three values directly",
      "D": "4.0 henry, because a series string takes the largest value"
    },
    "answer": "C",
    "explanation": "Unlinked inductors in series add directly: 1.5 + 2.5 + 4 gives 8 henrys. The reciprocal method gives a smaller value and belongs to the parallel arrangement, where the total falls below the smallest branch. A series string never takes the value of the smallest coil, and it never takes just the largest one either, because every coil in the string contributes its full inductance to the total.",
    "id": 127
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "A 6 henry choke and a 3 henry choke are connected in parallel with no mutual coupling. What is the combined inductance?",
    "options": {
      "A": "2 henrys, found by dividing the product of the two by their sum",
      "B": "9 henrys, found by adding the two values together as in a series string",
      "C": "4.5 henrys, found by averaging the two values and ignoring the parallel rule",
      "D": "18 henrys, found by multiplying the two values together without dividing by anything"
    },
    "answer": "A",
    "explanation": "Two unlinked inductors in parallel combine like two resistors in parallel, so the total is (6 x 3) / (6 + 3), which is 2 henrys, smaller than either branch. Adding the values to get 9 henrys is the series rule. An average of 4.5 henrys has no basis in circuit rules, and would exceed the 3 henry branch. Multiplying to get 18 henrys is only the numerator of the product-over-sum formula, with the division missing.",
    "id": 128
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "A relay coil is switched off by a transistor, and the transistor keeps failing from voltage spikes. Which remedy addresses the cause?",
    "options": {
      "A": "Increase the supply voltage so that the transistor sees a smaller percentage spike",
      "B": "Replace the coil with a longer wire of higher resistance to slow the current",
      "C": "Add a series resistor to reduce the current in the coil while it is energized",
      "D": "Connect a diode across the coil so the collapsing field has a path"
    },
    "answer": "D",
    "explanation": "When the current is interrupted, the collapsing field induces a voltage that can reach hundreds of volts, and a reverse-connected diode across the coil lets the current circulate and die away safely. Raising the supply voltage increases the stored energy and makes the spike worse. Lengthening the wire of the coil changes its resistance and inductance but does not stop the induced spike. A series resistor lowers the coil current and may stop the relay from pulling in, yet the spike still occurs.",
    "id": 129
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "A 3 henry coil carries 4 amperes, and the circuit is interrupted so that the current falls to zero in 0.06 second. What voltage is induced in the coil?",
    "options": {
      "A": "0.72 volt, found by multiplying the inductance, current and time together",
      "B": "200 volts, found by multiplying inductance by current and dividing by time",
      "C": "12 volts, found by multiplying the inductance by the current only",
      "D": "0.005 volt, found by dividing the time by the inductance and current"
    },
    "answer": "B",
    "explanation": "The induced voltage equals L times the change in current divided by the time, which is 3 x 4 / 0.06, or 200 volts. The figure of 0.72 volt comes from multiplying by the time instead of dividing by it. The figure of 12 volts is only L multiplied by the current, with the time left out. The figure of 0.005 volt results from dividing in the wrong order, using the time in the numerator in place of the denominator.",
    "id": 130
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "In a purely inductive AC circuit, what is the phase relationship between the voltage across the coil and the current through it?",
    "options": {
      "A": "The current lags the voltage by 90 degrees, so voltage peaks a quarter cycle first",
      "B": "The current leads the voltage by 90 degrees, so the current reaches its peak first",
      "C": "The current and voltage are in phase because both depend on the same supply frequency",
      "D": "The current lags the voltage by 180 degrees, so they are exactly opposite"
    },
    "answer": "A",
    "explanation": "The voltage across an inductor is largest when the current is changing fastest, which is at the zero crossing, so the voltage leads and the current lags by 90 degrees (ELI). Leading current describes a capacitor instead. Sharing a frequency does not put two waves in phase, since phase depends on the circuit element. A lag of 180 degrees would put the waves in opposition, which is not the behavior of an ideal coil.",
    "id": 131
  },
  {
    "domain": "ac_theory",
    "chapter": 14,
    "question": "A contactor coil measures 5 ohms with an ohmmeter and draws 0.4 amperes when connected to a 120 volt, 60 hertz supply. What mainly limits the current?",
    "options": {
      "A": "The 5 ohm winding resistance, which alone would allow 24 amperes",
      "B": "The supply frequency, because 60 hertz is too low to push current through",
      "C": "The reactance of the coil, which is about 300 ohms",
      "D": "Nothing in particular, because AC current is always limited by the breaker"
    },
    "answer": "C",
    "explanation": "The opposition seen by the supply is 120 / 0.4, or 300 ohms, and with only 5 ohms of wire resistance the rest is inductive reactance, close to 300 ohms. The winding resistance by itself would allow 24 amperes, far more than is measured, so it cannot be the limit. Frequency does not push current; it sets the reactance for a given inductance. A breaker protects against overcurrent but never sets the normal running current of a load.",
    "id": 132
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "A capacitor stores 3 millicoulombs of charge when 12 volts is applied across its terminals. What is its capacitance?",
    "options": {
      "A": "36,000 microfarads, found by multiplying the charge by the voltage",
      "B": "4,000 microfarads, found by dividing the voltage by the charge",
      "C": "250 microfarads, found by dividing the charge by the voltage",
      "D": "0.25 microfarad, found by dividing the charge by the voltage and shifting the decimal"
    },
    "answer": "C",
    "explanation": "Capacitance equals charge divided by voltage, so 0.003 coulomb divided by 12 volts gives 0.00025 farad, which is 250 microfarads. Multiplying charge by voltage gives a quantity with the wrong units and an absurdly large number. Dividing voltage by charge inverts the formula and gives 4,000, which is not a capacitance. The answer of 0.25 microfarad is the right digits with the decimal placed three places off, a unit conversion slip.",
    "id": 133
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "Which change to a parallel-plate air capacitor would double its capacitance?",
    "options": {
      "A": "Moving the plates to half of their original spacing while keeping the area the same",
      "B": "Doubling the voltage applied across the plates while keeping the spacing the same",
      "C": "Moving the plates to twice their original spacing while keeping the area the same",
      "D": "Cutting the plate area in half while moving the plates closer by the same factor"
    },
    "answer": "A",
    "explanation": "Capacitance is inversely proportional to plate spacing, so halving the gap with the same area doubles the capacitance. Raising the voltage changes the stored charge but not the capacitance, which is a property of the construction. Doubling the spacing cuts capacitance to half. Halving the area also halves capacitance while halving the spacing doubles it, so those two changes cancel and leave the capacitance unchanged.",
    "id": 134
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "A 10 microfarad capacitor and a 40 microfarad capacitor are connected in series. What is the total capacitance?",
    "options": {
      "A": "50 microfarads, because capacitors in series add directly",
      "B": "25 microfarads, because the total is the average of the two values",
      "C": "400 microfarads, because the total is the product of the two values",
      "D": "8 microfarads, because the total is the product divided by the sum"
    },
    "answer": "D",
    "explanation": "Capacitors in series combine by the reciprocal rule, and for two units the total is (10 x 40) / (10 + 40) = 8 microfarads, below the smaller part. Direct addition gives 50 and is the rule for parallel capacitors. An average of 25 has no basis in circuit rules and would exceed the smaller capacitor. The product alone, 400, is the numerator of the formula without the division by the sum.",
    "id": 135
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "A technician needs about 80 microfarads and has only a 10, a 22 and a 47 microfarad capacitor of adequate voltage rating. What is the best way to combine them?",
    "options": {
      "A": "Connect all three in parallel to get 79 microfarads",
      "B": "Connect all three in series to get about 6 microfarads",
      "C": "Connect the 22 and 47 in series and the 10 in parallel",
      "D": "Use only the 47 microfarad part, since capacitance does not depend on count"
    },
    "answer": "A",
    "explanation": "Parallel capacitors add, so 10 + 22 + 47 gives 79 microfarads, close to the target. A series string of the three would give less than the smallest part, about 6 microfarads. Putting the 22 and 47 in series gives 15 and, with the 10 in parallel, only 25 microfarads. Using the 47 alone leaves the circuit far short of the capacitance required, and capacitance does depend on how the parts are combined.",
    "id": 136
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "What is the capacitive reactance of a 40 microfarad capacitor connected to a 60 hertz supply?",
    "options": {
      "A": "0.015 ohm, found by multiplying 377 by the capacitance in farads",
      "B": "6.6 ohms, found by dropping a factor of ten from the correct setup of the formula",
      "C": "663 ohms, found by entering the capacitance as 4 microfarads instead of 40 microfarads",
      "D": "66.3 ohms, found by dividing 1 by the product of 377 and the capacitance"
    },
    "answer": "D",
    "explanation": "Capacitive reactance equals 1 divided by (2 x pi x f x C), which is 1 / (377 x 0.00004) = 66.3 ohms. Multiplying 377 by the capacitance without taking the reciprocal gives 0.015, a number that rises with capacitance, the opposite of real behavior. An answer of 6.6 ohms is off by a factor of ten and matches a 400 microfarad part. An answer of 663 ohms corresponds to a 4 microfarad capacitor, a unit conversion mistake.",
    "id": 137
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "When the supply frequency applied to a capacitor doubles, what happens to its capacitive reactance?",
    "options": {
      "A": "It doubles, because reactance rises in direct proportion to frequency",
      "B": "It is cut in half, because reactance varies inversely with frequency",
      "C": "It stays the same, because reactance depends only on the capacitance",
      "D": "It becomes four times larger, because reactance depends on frequency squared"
    },
    "answer": "B",
    "explanation": "Capacitive reactance is 1 / (2 x pi x f x C), so doubling the frequency halves the reactance. A direct rise with frequency describes an inductor, not a capacitor. Reactance does depend on frequency, so it cannot stay constant. The relationship is not squared in either direction, so a fourfold increase has no basis. Doubling the frequency from 60 to 120 hertz therefore takes a 40 microfarad capacitor from 66.3 ohms down to 33.2 ohms.",
    "id": 138
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "A 30 microfarad motor-run capacitor is connected to a 240 volt, 60 hertz supply. About how much current does it draw?",
    "options": {
      "A": "0.271 ampere, from a reactance of 884 ohms, which is ten times too large",
      "B": "27.1 amperes, from a reactance of 8.84 ohms, which is ten times too small",
      "C": "2.71 amperes, found by dividing 240 volts by a reactance of 88.4 ohms",
      "D": "Zero amperes, because a capacitor blocks current at every frequency of supply"
    },
    "answer": "C",
    "explanation": "The reactance is 1 / (377 x 0.00003) = 88.4 ohms, and the current is 240 / 88.4 = 2.71 amperes. A reactance of 884 ohms would belong to a 3 microfarad part and gives only 0.271 ampere, so a decimal slip in the capacitance causes it. A reactance of 8.84 ohms would belong to a 300 microfarad part and gives 27.1 amperes. A capacitor blocks only direct current once charged; on alternating voltage it passes a steady current.",
    "id": 139
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "In a circuit containing only a capacitor, what is the phase relationship between the current and the voltage?",
    "options": {
      "A": "The current lags the voltage by 90 degrees, so the voltage peaks first",
      "B": "The current leads the voltage by 90 degrees, so the current peaks first",
      "C": "The current and voltage are in phase, because no resistance is present",
      "D": "The current lags the voltage by 180 degrees, so they are always opposite"
    },
    "answer": "B",
    "explanation": "Current in a capacitor is greatest when the voltage is changing fastest, at the zero crossing, so the current leads by 90 degrees (ICE). A lagging current of 90 degrees describes an inductor. Being in phase is the behavior of a resistor, not of a capacitor. A 180 degree lag would mean the waves are exact opposites, which is not what happens in a capacitor.",
    "id": 140
  },
  {
    "domain": "ac_theory",
    "chapter": 15,
    "question": "A power supply has a 470 microfarad capacitor charged to 170 volts, with a 100 kilohm bleeder resistor connected across it. About how long does it take for the capacitor to discharge to under 1 percent of its starting voltage?",
    "options": {
      "A": "About 47 seconds, which is one time constant of the circuit",
      "B": "About 47 milliseconds, found by using 470 nanofarads in the calculation",
      "C": "About 235 seconds, which is five time constants of the circuit",
      "D": "About 4.7 seconds, found by dividing the time constant by ten"
    },
    "answer": "C",
    "explanation": "The time constant is 100,000 x 0.00047 = 47 seconds, and five time constants (235 seconds) are needed for the voltage to fall below 1 percent. One time constant leaves 36.8 percent, or about 63 volts. A value near 47 milliseconds results from a unit error that treats the capacitor as a thousand times smaller. A value of 4.7 seconds divides by ten with no basis, and would leave the capacitor dangerously charged.",
    "id": 141
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "A series circuit has a 30 ohm resistor and an inductor with a reactance of 40 ohms. What is the impedance?",
    "options": {
      "A": "70 ohms, because resistance and reactance add directly in any series circuit",
      "B": "10 ohms, because the difference between the two values gives the opposition",
      "C": "1,200 ohms, because the product of the two values gives the total opposition",
      "D": "50 ohms, because the two legs combine as the root of their squares"
    },
    "answer": "D",
    "explanation": "Resistance and reactance are 90 degrees apart in phase, so the impedance is the square root of (30 squared + 40 squared), which is 50 ohms. Adding the values directly gives 70 ohms and ignores the phase difference. A subtraction gives 10 ohms and applies a rule that holds only for an inductor and capacitor against each other. A product of the two values has no meaning as an opposition and is in the wrong units.",
    "id": 142
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "A 60 ohm resistor is in series with a capacitor of 80 ohms reactance across a 240 volt supply. What current flows?",
    "options": {
      "A": "1.71 amperes, found by dividing the voltage by the sum of 60 and 80",
      "B": "2.4 amperes, found by dividing the voltage by an impedance of 100 ohms",
      "C": "4.0 amperes, found by dividing the voltage by the resistance only",
      "D": "3.0 amperes, found by dividing the voltage by the reactance only"
    },
    "answer": "B",
    "explanation": "The impedance is the square root of (3,600 + 6,400), which is 100 ohms, and 240 / 100 gives 2.4 amperes. Dividing by 140 ohms, the arithmetic sum, gives 1.71 amperes and ignores the 90 degree phase difference. Dividing by the resistance alone gives 4.0 amperes and leaves out the capacitor. Dividing by the reactance alone gives 3.0 amperes and leaves out the resistor, but both parts limit the current.",
    "id": 143
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "A series RL circuit has R = 30 ohms and XL = 40 ohms. What is the phase relationship between the supply current and the supply voltage?",
    "options": {
      "A": "The current leads the voltage by about 36.9 degrees",
      "B": "The current lags the voltage by about 36.9 degrees",
      "C": "The current leads the voltage by about 53.1 degrees",
      "D": "The current lags the voltage by about 53.1 degrees"
    },
    "answer": "D",
    "explanation": "The phase angle is the arctangent of 40 / 30, which is 53.1 degrees, and an inductive circuit has current lagging the voltage. Leading current belongs to a capacitive circuit. An angle of 36.9 degrees is the complementary angle, which comes from inverting the ratio to 30 / 40 and so mixing up which leg is which. Both choices using 36.9 degrees therefore have the wrong angle.",
    "id": 144
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "A series circuit has R = 40 ohms, XL = 90 ohms and XC = 60 ohms. What is the impedance?",
    "options": {
      "A": "50 ohms, found from a net reactance of 30 ohms and 40 ohms resistance",
      "B": "190 ohms, found by adding all three values with no regard to phase",
      "C": "98.5 ohms, found by ignoring the capacitor and treating the rest as a triangle",
      "D": "115.3 ohms, found by treating the three values as separate legs of a triangle"
    },
    "answer": "A",
    "explanation": "Inductive and capacitive reactance oppose each other, so the net reactance is 90 minus 60, or 30 ohms, and the impedance is the square root of (1,600 + 900), which is 50 ohms. Adding all three values to get 190 ohms ignores both the phase differences and the cancellation. Ignoring the capacitor gives 98.5 ohms, which would be correct only if the capacitor were absent. Treating all three as separate legs of one triangle gives a number with no basis.",
    "id": 145
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "A 50 millihenry coil and a 20 microfarad capacitor are connected in series. At approximately what frequency does the circuit reach resonance?",
    "options": {
      "A": "60 hertz, which is the standard power frequency of the supply",
      "B": "159 hertz, found from one over 2 pi times the root of L times C",
      "C": "1,000 hertz, found by assuming a much smaller product of L and C in the formula",
      "D": "25 hertz, found by assuming a much larger product of L and C"
    },
    "answer": "B",
    "explanation": "The resonant frequency is 1 / (2 x pi x the square root of L x C). With 0.05 H and 0.00002 F, the product is 1 x 10 to the negative 6, the square root is 0.001, and the frequency is 159.2 hertz. The value of 60 hertz is simply the power frequency and has no connection to these parts. The value of 1,000 hertz would require a much smaller product of L and C. The value of 25 hertz would require a product about forty times larger.",
    "id": 146
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "In a series RLC circuit connected to a 120 volt source, a meter reads 216 volts across the inductor. Which explanation is correct?",
    "options": {
      "A": "The meter is faulty, because no part of a series circuit can exceed the supply",
      "B": "The supply voltage must be higher than its rating, because the parts total only 120",
      "C": "The capacitor is shorted, because that is the only way an inductor voltage can exceed the supply",
      "D": "The inductor and capacitor voltages are opposed in phase, so each can exceed the supply"
    },
    "answer": "D",
    "explanation": "Inductor and capacitor voltages are 180 degrees apart, so they partly cancel across the pair, and either can be larger than the source when the reactances are large compared with the resistance. A single series part can therefore exceed the supply without any fault. A faulty meter is not needed to explain the reading. A supply above its rating is not required either, since voltages add as phasors. A shorted capacitor would remove it from the circuit and could not create the reading.",
    "id": 147
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "A 120 volt source feeds a 60 ohm resistor, a coil with 40 ohms of reactance, and a capacitor with 120 ohms of reactance, all in parallel. What is the total current?",
    "options": {
      "A": "6.0 amperes, found by adding the three branch currents of 2, 3 and 1 amperes",
      "B": "3.61 amperes, found by ignoring the capacitor branch entirely and using only two branches",
      "C": "2.83 amperes, from a resistive current of 2 amperes and net reactive current of 2",
      "D": "1.0 ampere, found by subtracting the resistor current from the coil current"
    },
    "answer": "C",
    "explanation": "The branch currents are 2 amperes in the resistor, 3 amperes in the coil and 1 ampere in the capacitor. The net reactive current is 3 minus 1, which is 2 amperes, and the total is the square root of (4 + 4), or 2.83 amperes. Adding all three branch currents ignores phase and the cancellation. Ignoring the capacitor gives 3.61 amperes, which is what the circuit would draw without it. Subtracting the resistor current from the coil current mixes quantities that are 90 degrees apart.",
    "id": 148
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "What happens to the impedance and current in a series RLC circuit at its resonant frequency?",
    "options": {
      "A": "The impedance is at its maximum and the current is at its minimum",
      "B": "The impedance equals the resistance and the current is at its maximum",
      "C": "The impedance becomes infinite and the current falls to zero",
      "D": "The impedance equals the sum of XL and XC and the current is moderate"
    },
    "answer": "B",
    "explanation": "At series resonance XL equals XC, the net reactance is zero, and the impedance equals R, which is its smallest possible value, so the current is at its largest. The maximum-impedance behavior belongs to a parallel resonant circuit. An infinite impedance with zero current is the same parallel behavior taken to an ideal limit. The sum of XL and XC would be a large number and is not the condition at resonance, where the two cancel each other.",
    "id": 149
  },
  {
    "domain": "ac_theory",
    "chapter": 16,
    "question": "A 12 ohm resistor and a capacitor with 16 ohms of reactance are connected in parallel across a 120 volt supply. What is the total current drawn from the source?",
    "options": {
      "A": "17.5 amperes, found by adding the 10 ampere and 7.5 ampere branch currents",
      "B": "2.5 amperes, found by taking the difference of the branch currents",
      "C": "12.5 amperes, found from the square root of the sum of the squared branch currents",
      "D": "4.29 amperes, found by dividing the voltage by the sum of 12 and 16 ohms"
    },
    "answer": "C",
    "explanation": "The resistor branch carries 10 amperes and the capacitor branch carries 7.5 amperes, 90 degrees apart, so the total is the square root of (100 + 56.25), which is 12.5 amperes. Adding the branch currents gives 17.5 amperes and ignores the phase difference. Subtracting them applies a rule that works only for an inductor against a capacitor. Dividing by the sum of resistance and reactance does not give the parallel current, and also ignores the phase relationship.",
    "id": 150
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "A single-phase motor on a 240 volt circuit draws 20 amperes at a power factor of 0.8 lagging. What true power does the motor use?",
    "options": {
      "A": "3,840 watts, found by multiplying volts, amperes and the power factor",
      "B": "4,800 watts, found by multiplying volts and amperes only",
      "C": "6,000 watts, found by dividing the apparent power by the power factor",
      "D": "2,880 watts, found by multiplying the apparent power by the sine of the angle"
    },
    "answer": "A",
    "explanation": "True power equals volts times amperes times the power factor, which is 240 x 20 x 0.8 = 3,840 watts. The product of volts and amperes alone, 4,800, is the apparent power in volt-amperes. Dividing by the power factor makes the number larger and inverts the relationship. Multiplying by the sine of the angle gives 2,880, which is the reactive power in vars, not the power that does work.",
    "id": 151
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "For the same motor drawing 20 amperes at 240 volts and a power factor of 0.8, what is the reactive power?",
    "options": {
      "A": "3,840 vars, found by multiplying apparent power by the cosine of the angle",
      "B": "4,800 vars, found by multiplying volts and amperes only",
      "C": "2,880 vars, found by multiplying apparent power by the sine of the angle",
      "D": "960 vars, found by subtracting the true power from the apparent power"
    },
    "answer": "C",
    "explanation": "With a power factor of 0.8 the angle is 36.87 degrees, the sine is 0.6, and Q = 4,800 x 0.6 = 2,880 vars, which also satisfies the triangle with 3,840 watts. The product with the cosine is the true power in watts. The volt-ampere product is the apparent power. Subtracting the true power from the apparent power gives 960, but reactive power combines with true power through squares, not by subtraction.",
    "id": 152
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "A series circuit has a resistance of 30 ohms and a net inductive reactance of 40 ohms. What is its power factor?",
    "options": {
      "A": "0.6 lagging, found from the resistance divided by the impedance of 50 ohms",
      "B": "0.8 lagging, found from the reactance divided by the impedance of 50 ohms",
      "C": "0.75 lagging, found from the resistance divided by the reactance",
      "D": "0.6 leading, found from the resistance divided by the impedance of 50 ohms"
    },
    "answer": "A",
    "explanation": "Power factor equals cosine of the phase angle, which is R / Z = 30 / 50 = 0.6, and an inductive circuit lags. The value of 0.8 is the sine of the angle, X / Z, which relates to reactive power. The ratio of resistance to reactance, 0.75, is the cotangent of the angle and is not the power factor. The same magnitude of 0.6 would be leading only in a capacitive circuit, not an inductive one.",
    "id": 153
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "Why can a low power factor cost a customer money even though reactive power does no work?",
    "options": {
      "A": "Because the wattmeter reads reactive power as if it were real energy used",
      "B": "Because reactive power turns into heat in the load and raises its temperature",
      "C": "Because the utility meter on every home bills for vars at the same rate as watts",
      "D": "Because the same true power then needs more current, with larger losses and equipment"
    },
    "answer": "D",
    "explanation": "For a fixed true power, a lower power factor needs more current, which increases conductor heating, voltage drop and the size of the transformers and cables, so utilities may add penalties for low power factor. A wattmeter reads true power only and does not count reactive power as energy. Reactive power moves back and forth and is not converted to heat in an ideal load. Most residential meters bill kilowatt-hours only and do not charge for vars.",
    "id": 154
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "A 5 kilowatt single-phase load operates at 240 volts with a power factor of 0.7. What current does it draw?",
    "options": {
      "A": "20.8 amperes, found by ignoring the power factor and dividing power by voltage",
      "B": "14.6 amperes, found by multiplying by the power factor instead of dividing",
      "C": "29.8 amperes, found by dividing the power by voltage times power factor",
      "D": "41.7 amperes, found by using a power factor of 0.5 instead of 0.7"
    },
    "answer": "C",
    "explanation": "Current equals true power divided by the product of voltage and power factor: 5,000 / (240 x 0.7) = 29.8 amperes. The value of 20.8 amperes ignores the power factor and would apply only at a power factor of 1.0. The value of 14.6 amperes multiplies by the power factor instead of dividing. The value of 41.7 amperes corresponds to a power factor of 0.5 rather than 0.7.",
    "id": 155
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "A technician reads 238 volts, 18.0 amperes and a wattmeter indication of 3,450 watts on a compressor motor. What is the approximate power factor?",
    "options": {
      "A": "0.81 lagging, found by dividing 3,450 by the product of 238 and 18",
      "B": "1.24 lagging, found by dividing the product of 238 and 18 by 3,450",
      "C": "0.59 lagging, found by dividing the reactive power by the apparent power",
      "D": "0.95 lagging, found by assuming the motor is already corrected"
    },
    "answer": "A",
    "explanation": "Apparent power is 238 x 18 = 4,284 VA, and the power factor is the true power over the apparent power, 3,450 / 4,284 = 0.805. Inverting the ratio gives 1.24, which is impossible because a power factor cannot exceed 1. Dividing the reactive power by the apparent power gives 0.59, which is the sine of the angle and not the power factor. Assuming a value of 0.95 ignores the measured data, which show a lower figure and room for improvement.",
    "id": 156
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "A 10 kilowatt load has a power factor of 0.70 lagging and is to be corrected to 0.95. About how much capacitive reactive power is needed?",
    "options": {
      "A": "10.2 kvar, which is the full reactive power of the uncorrected load",
      "B": "3.3 kvar, which is the reactive power that remains after correction",
      "C": "13.5 kvar, which is found by adding the before and after reactive powers",
      "D": "6.9 kvar, which is the difference between before and after reactive powers"
    },
    "answer": "D",
    "explanation": "The original reactive power is 10 x 1.0202 = 10.2 kvar and the target is 10 x 0.3287 = 3.29 kvar, so the capacitor must supply the difference, 6.9 kvar. A capacitor sized at 10.2 kvar would cancel all the reactive power and overshoot the target, leaving the load leading. The 3.3 kvar value is what should remain, not what is supplied. The sum 13.5 kvar adds when it should subtract.",
    "id": 157
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "Why does connecting a capacitor in parallel with an induction motor reduce the current drawn from the supply?",
    "options": {
      "A": "The capacitor lowers the motor's resistance, so less real power is needed",
      "B": "The capacitor stores the motor's energy and releases it only when it is turned off",
      "C": "The leading capacitor current cancels part of the lagging reactive current of the motor",
      "D": "The capacitor raises the supply frequency, which reduces the inductive reactance"
    },
    "answer": "C",
    "explanation": "The capacitor current leads the voltage by 90 degrees while the motor's magnetizing current lags it by about the same amount, so they are in opposition and the supply carries only the difference. The capacitor does not change the motor's resistance or the real power it uses. It does not store energy for release at shutdown as its main function. It also has no effect on the supply frequency, which the utility sets.",
    "id": 158
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "A 3 kilowatt heater runs for 4 hours. The energy price is 14 cents per kilowatt-hour. What does the run cost?",
    "options": {
      "A": "42 cents, found by multiplying power by price only",
      "B": "12.00 dollars, found by using the energy in kilowatt-hours as the dollars",
      "C": "0.56 dollar, found by multiplying the price by the hours only",
      "D": "1.68 dollars, found from 12 kilowatt-hours at 14 cents each"
    },
    "answer": "D",
    "explanation": "Energy equals power times time, so 3 kW x 4 h = 12 kWh, and at 0.14 dollar per kWh the cost is 1.68 dollars. Multiplying power by price alone leaves out the time and gives 42 cents. Treating 12 kilowatt-hours as 12 dollars skips the price. Multiplying the price by the hours alone leaves out the power, so it is not an energy cost.",
    "id": 159
  },
  {
    "domain": "ac_theory",
    "chapter": 17,
    "question": "A trainee multiplies a motor's measured 238 volts by its measured 18.0 amperes and records 4,284 watts. What does that product represent?",
    "options": {
      "A": "The true power, because the volts and amperes were both read with true-rms meters",
      "B": "The apparent power in volt-amperes, which exceeds the true power by the power factor",
      "C": "The reactive power in vars, because the motor is an inductive load",
      "D": "The efficiency of the motor expressed as a number of watts"
    },
    "answer": "B",
    "explanation": "The product of rms volts and rms amperes is the apparent power in volt-amperes, and the true power is lower by the factor of the power factor. Using rms meters does not make the product a true power, because rms meters give no information about phase. Reactive power requires the sine of the angle and is not the plain product. Efficiency compares output power with input power and is a ratio, not a power in watts.",
    "id": 160
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "In a balanced three-phase system, how are the three phase voltages related to one another in time?",
    "options": {
      "A": "They are in phase with each other and differ only in conductor color",
      "B": "They are 90 degrees apart, as in the voltage and current of a coil",
      "C": "They are 180 degrees apart, as in the two hot legs of a household service",
      "D": "They are equal in size and spaced 120 electrical degrees apart in time"
    },
    "answer": "D",
    "explanation": "The three voltages of a three-phase system have equal size and are spaced one third of a cycle, or 120 degrees, apart, so they sum to zero at every instant. If they were in phase, no rotating field could form and the system would be three single-phase circuits in step. A 90 degree spacing describes voltage and current in a coil, not phase-to-phase spacing. A 180 degree spacing describes the two hot legs of a single-phase household service.",
    "id": 161
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "What is the line-to-line voltage of a wye system in which each phase, measured from line to neutral, is 277 volts?",
    "options": {
      "A": "277 volts, because line and phase voltages are equal in a wye",
      "B": "160 volts, found by dividing the phase voltage by 1.732",
      "C": "480 volts, found by multiplying the phase voltage by 1.732",
      "D": "831 volts, found by multiplying the phase voltage by 3"
    },
    "answer": "C",
    "explanation": "In a wye connection the line voltage is 1.732 times the phase voltage, so 277 x 1.732 = 480 volts. Equal line and phase voltages describe a delta, not a wye. Dividing by 1.732 goes the wrong direction and gives 160 volts. Multiplying by 3 gives 831 volts, which treats the phase voltages as if they simply added, when they are 120 degrees apart and combine with a factor of 1.732.",
    "id": 162
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "Three 20 ohm resistors are connected in delta across a 240 volt three-phase supply. What is the current in each line conductor?",
    "options": {
      "A": "12.0 amperes, equal to the current in each resistor",
      "B": "20.8 amperes, equal to 1.732 times the phase current",
      "C": "6.9 amperes, equal to the phase current divided by 1.732",
      "D": "36.0 amperes, equal to three times the phase current"
    },
    "answer": "B",
    "explanation": "Each resistor in a delta sees the full 240 volts, so the phase current is 240 / 20 = 12 amperes, and the line current is 1.732 times that, or 20.8 amperes. Equal line and phase currents hold for a wye, not a delta. Dividing by 1.732 reverses the relationship. Multiplying by 3 adds the phase currents as if they were in phase, but they are 120 degrees apart.",
    "id": 163
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "A three-phase resistive heater bank is rated 15 kilowatts at 480 volts. What current flows in each line?",
    "options": {
      "A": "18.0 amperes, found by dividing the power by 1.732 times the line voltage",
      "B": "31.3 amperes, found by dividing the power by the line voltage only",
      "C": "54.1 amperes, found by multiplying the power by 1.732 and dividing by the voltage",
      "D": "10.4 amperes, found by dividing the power by 3 times the line voltage"
    },
    "answer": "A",
    "explanation": "For a resistive load, line current equals power divided by 1.732 times line voltage: 15,000 / (1.732 x 480) = 18.04 amperes. Dividing by voltage alone gives 31.3 amperes, which would be the current of a single-phase 480 volt heater of the same rating. Multiplying by 1.732 inflates the answer to 54.1 amperes. Dividing by 3 times the voltage gives 10.4 amperes, which wrongly treats the system as three single-phase circuits at line voltage.",
    "id": 164
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "A balanced three-phase motor draws 25 amperes in each line from a 208 volt supply. What is its apparent power?",
    "options": {
      "A": "5.2 kilovolt-amperes, found by multiplying voltage and current only",
      "B": "9.0 kilovolt-amperes, found by multiplying 1.732, voltage and current",
      "C": "15.6 kilovolt-amperes, found by multiplying 3, voltage and current",
      "D": "3.0 kilovolt-amperes, found by dividing the single-phase product by 1.732"
    },
    "answer": "B",
    "explanation": "Three-phase apparent power equals 1.732 x line voltage x line current, so 1.732 x 208 x 25 = 9,006 volt-amperes, or about 9.0 kVA. Multiplying only the voltage and current gives the single-phase value of 5.2 kVA. Multiplying by 3 gives 15.6 kVA and overstates the answer, since the three phases are not in step. Dividing the single-phase product by 1.732 gives 3.0 kVA, which moves the factor the wrong way.",
    "id": 165
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "A four-wire 208Y/120 volt panel feeds three identical resistive loads, one on each phase. What current does the neutral conductor carry?",
    "options": {
      "A": "Essentially zero, because the three equal line currents cancel at the neutral",
      "B": "The same as each line current, because the neutral returns all of them",
      "C": "Three times each line current, because the three currents add in the neutral",
      "D": "1.732 times each line current, because of the phase spacing"
    },
    "answer": "A",
    "explanation": "The three equal currents are 120 degrees apart and their vector sum is zero, so a balanced load leaves the neutral with no current. Returning the same current as one line would require the other two to be absent. Adding the currents arithmetically to get three times a line current ignores the phase spacing. The factor of 1.732 relates line and phase quantities in a connection and is not the neutral current of a balanced system.",
    "id": 166
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "An electrician needs to reverse the direction of rotation of a three-phase induction motor. What is the correct way to do it?",
    "options": {
      "A": "Reverse the neutral and one line conductor at the motor terminals",
      "B": "Reduce the supply voltage by 1.732 using a transformer",
      "C": "Replace the motor with one rated for a different frequency",
      "D": "Interchange any two of the three line conductors at the motor"
    },
    "answer": "D",
    "explanation": "Swapping any two lines reverses the phase sequence, which reverses the rotating field and so the motor. A three-wire motor has no neutral, so changing a neutral does nothing. A voltage change alters torque and current but not direction. A motor rated for another frequency would run at a different speed but would still turn the way the phase sequence directs it.",
    "id": 167
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "In a 240 volt four-wire high-leg delta system, about what voltage is measured between the high leg and the neutral?",
    "options": {
      "A": "120 volts, the same as the other two lines to neutral",
      "B": "240 volts, the same as the line-to-line voltage",
      "C": "208 volts, which is 1.732 times 120 volts",
      "D": "139 volts, found by dividing 240 volts by 1.732"
    },
    "answer": "C",
    "explanation": "The neutral is the midpoint of one winding, 120 volts from two lines, and the third line is 120 x 1.732 = 208 volts from the neutral. For this reason the high-leg conductor is marked orange. Reading 120 volts from the high leg would apply only to the other two lines. A reading of 240 volts is the line-to-line voltage, not the line-to-neutral voltage. A value of 139 volts would be a wye phase voltage and does not apply to this system.",
    "id": 168
  },
  {
    "domain": "three_phase",
    "chapter": 18,
    "question": "A 9 kilowatt, 208 volt three-phase delta heater should draw about 25 amperes in each line. A technician clamps the three lines and reads 14.4, 14.4 and 25.0 amperes. What does this pattern indicate?",
    "options": {
      "A": "The supply voltage is too low on all three phases",
      "B": "One heating element is open, and the heater is running on two elements",
      "C": "All three elements are shorted, so the line currents are lower",
      "D": "The clamp meter is reading in the wrong range on two of the lines"
    },
    "answer": "B",
    "explanation": "Two lines carry exactly one element's phase current, 14.4 amperes, and the third carries 1.732 times that, 25.0 amperes, which is the signature of a delta with one open element and two working ones. A low voltage on all phases would lower all three readings equally. Shorted elements would raise the currents sharply and trip protection. A range error on two lines would not produce readings with an exact ratio of 1.732.",
    "id": 169
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "A student asks why a power transformer cannot be used to change a steady direct current battery voltage. Which reason is correct?",
    "options": {
      "A": "A steady current makes a steady field, and only a changing field induces secondary voltage.",
      "B": "The iron core absorbs direct current and cannot pass any magnetic field to the secondary winding at all.",
      "C": "Direct current always flows backward through the primary and cancels the voltage that the secondary would normally produce.",
      "D": "The laminations are insulated from each other and block direct current from entering the core in any amount."
    },
    "answer": "A",
    "explanation": "Mutual induction needs a changing field. A steady direct current builds a constant field, so after the first brief pulse the secondary sees nothing. The core does not absorb or block direct current, the current does not flow backward and cancel anything, and the lamination insulation only limits eddy currents inside the steel. In addition the primary has very low resistance, so a direct supply could overheat it.",
    "id": 170
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "A transformer has 1,200 turns on the primary and 300 turns on the secondary, and the primary is connected to 480 volts. What is the secondary voltage?",
    "options": {
      "A": "The secondary gives about 1,920 volts, since the 4 to 1 ratio multiplies the voltage by four.",
      "B": "The secondary gives about 360 volts, since the turns difference is subtracted directly from the primary volts.",
      "C": "The secondary gives about 480 volts, since a transformer keeps the same voltage and changes only current.",
      "D": "The secondary gives about 120 volts, since the 4 to 1 ratio divides the voltage by four."
    },
    "answer": "D",
    "explanation": "The voltage ratio equals the turns ratio, 1,200 to 300, which is 4 to 1. Dividing 480 volts by 4 gives 120 volts. Multiplying by four would be correct only for a step-up unit with the turns reversed. Subtracting turns from volts mixes unlike quantities and has no meaning. A transformer changes voltage and current in opposite directions, so the voltage does not stay at 480 volts when the turns differ.",
    "id": 171
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "A 100 VA control transformer is rated 240 volts primary and 24 volts secondary. What is the full-load secondary current?",
    "options": {
      "A": "About 0.417 amperes, found by dividing the 100 volt-ampere rating by the 240 volt primary rating.",
      "B": "About 2.40 amperes, found by dividing the 24 volt secondary rating by the 10 to 1 ratio value.",
      "C": "About 4.17 amperes, found by dividing the 100 volt-ampere rating by the 24 volt secondary rating.",
      "D": "About 41.7 amperes, found by multiplying the 100 volt-ampere rating by the 24 volt secondary rating."
    },
    "answer": "C",
    "explanation": "Secondary current equals the volt-ampere rating divided by the secondary voltage: 100 divided by 24 is 4.17 amperes. Dividing by the primary voltage gives the primary current, 0.417 amperes. The 2.40 figure comes from an unrelated division that does not represent any current in this device. Multiplying volt-amperes by volts gives a meaningless number far above the real rating.",
    "id": 172
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "Why is a transformer core built from stacked thin laminations instead of one solid block of steel?",
    "options": {
      "A": "Thin insulated sheets confine eddy currents to tiny paths, which reduces heating and core energy loss.",
      "B": "Thin sheets raise the number of turns the winding can hold, increasing the secondary voltage.",
      "C": "Thin sheets store charge between layers like a capacitor, which smooths the output voltage.",
      "D": "Thin sheets make the core lighter, the only reason, since eddy currents do not occur in steel."
    },
    "answer": "A",
    "explanation": "Eddy currents circulate inside a solid core and waste energy as heat. Insulated laminations break those paths into small loops with far less heating. Laminations do not change the turns count or the secondary voltage, they are not intended to act as a capacitor, and eddy currents very much do occur in steel, which is why the construction is used.",
    "id": 173
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "A 25 kVA single-phase transformer is rated 480 volts primary and 240 volts secondary. What are the full-load primary and secondary currents?",
    "options": {
      "A": "About 104.2 amperes on the primary and about 52.1 amperes on the secondary at full load.",
      "B": "About 52.1 amperes on both windings, because the same current must flow through both coils.",
      "C": "About 25.0 amperes on the primary and about 12.5 amperes on the secondary at full load.",
      "D": "About 52.1 amperes on the primary and about 104.2 amperes on the secondary at full load."
    },
    "answer": "D",
    "explanation": "Primary current is 25,000 divided by 480, or 52.08 amperes. Secondary current is 25,000 divided by 240, or 104.17 amperes. The lower-voltage winding carries the higher current, so reversing them is wrong. Equal currents would mean the voltages are equal, which contradicts the stated ratings. The 25 and 12.5 figures simply reuse the kVA number and are not currents.",
    "id": 174
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "A transformer delivers 7,500 watts to a resistive load with 90 watts of core loss and 210 watts of copper loss. What is its efficiency?",
    "options": {
      "A": "About 97.6 percent, because only the 210 watts of copper loss is counted against the output.",
      "B": "About 96.2 percent, because 7,500 watts out is divided by 7,800 watts in.",
      "C": "About 95.8 percent, because the 300 watts of total loss is divided by the 7,500 watt output.",
      "D": "About 104.2 percent, because 7,500 watts out is divided by 7,200 watts left after the losses."
    },
    "answer": "B",
    "explanation": "Input equals output plus losses: 7,500 plus 90 plus 210 is 7,800 watts. Efficiency is 7,500 divided by 7,800, or 96.15 percent. Ignoring core loss gives a number that is too high. Dividing the loss by the output measures a different ratio and then needs to be subtracted from 100 for the wrong base. Subtracting losses from the output to find input reverses the energy flow.",
    "id": 175
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "A technician observes that a lightly loaded dry-type transformer rated 120 volts secondary reads 124 volts at its output. What does this most likely indicate?",
    "options": {
      "A": "A shorted turn in the secondary, because that fault always raises the output voltage above rating.",
      "B": "A reversed polarity connection, because wrong polarity adds the winding voltages and raises output a few volts.",
      "C": "An overloaded primary, because heavy primary current always forces the secondary voltage above the nameplate rating.",
      "D": "Normal behavior, because secondary voltage is higher at light load and drops as load current rises."
    },
    "answer": "D",
    "explanation": "Regulation describes how the output sags as load rises, so a few volts above nameplate at light load is expected. A shorted turn tends to lower output and cause heating. Wrong polarity matters when windings are connected together and would not give a small rise like this. A lightly loaded unit is not overloaded, and an overload lowers rather than raises the voltage.",
    "id": 176
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "An autotransformer steps 480 volts down to 240 volts and feeds a 10 kVA load. What current flows in the common winding?",
    "options": {
      "A": "About 41.7 amperes, which is the full output current because the common winding carries all of the load.",
      "B": "About 62.5 amperes, which is the sum of the 41.7 ampere output and the 20.8 ampere input.",
      "C": "About 20.8 amperes, which is the difference between the 41.7 ampere output and the 20.8 ampere input.",
      "D": "About 10.4 amperes, which is half of the 20.8 ampere input current."
    },
    "answer": "C",
    "explanation": "Output current is 10,000 divided by 240, or 41.67 amperes, and input current is 10,000 divided by 480, or 20.83 amperes. The common winding carries their difference, 20.83 amperes. It does not carry the whole output, and the currents do not add because they flow in opposite directions through that shared section. Halving the input again has no basis in the circuit.",
    "id": 177
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "A technician jumpers H1 to X1 on a small transformer, applies 120 volts to the high-voltage winding, and measures 108 volts between H2 and X2. What is the polarity?",
    "options": {
      "A": "Additive polarity, because the measured voltage is lower than the voltage applied to the high-voltage winding.",
      "B": "Subtractive polarity, because the measured voltage is lower than the voltage applied to the high-voltage winding.",
      "C": "Additive polarity, because any reading across two terminals always equals the sum of two windings.",
      "D": "Neither, because a jumper between windings makes the transformer unusable and no polarity reading is possible."
    },
    "answer": "B",
    "explanation": "With the H1 to X1 jumper, a reading lower than the applied voltage means the voltages subtract, so the polarity is subtractive. A reading higher than the applied voltage would indicate additive polarity. The reading is not always a sum, and the jumper method is the standard, safe test that gives a usable answer when done with a small supply and proper precautions.",
    "id": 178
  },
  {
    "domain": "transformers",
    "chapter": 19,
    "question": "Which statement about the transformer rating on a nameplate is correct?",
    "options": {
      "A": "Capacity is in volt-amperes because winding heating depends on current and voltage, not on load power factor.",
      "B": "Capacity is given in watts because heating depends only on the real power delivered to the load.",
      "C": "Capacity is given in volt-amperes because the core loss changes with the number of load terminals.",
      "D": "Capacity is given in amperes alone because transformers always operate at one fixed voltage value."
    },
    "answer": "A",
    "explanation": "Winding heating follows current, and insulation stress follows voltage, neither of which depends on the load's power factor, so the unit is rated in volt-amperes. A watt rating would mislead for a poor power factor load. Core loss does not depend on the number of terminals. Transformers are used at specific voltages, but current alone does not describe capacity without the voltage.",
    "id": 179
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "A grounded wye secondary produces 120 volts between each line and the neutral. What voltage will a meter read between any two of the lines?",
    "options": {
      "A": "About 240 volts, because two windings of 120 volts are simply added together in a wye connection.",
      "B": "About 120 volts, because the line voltage in a wye connection always equals the winding voltage.",
      "C": "About 208 volts, since wye line voltage is 1.732 times one winding voltage.",
      "D": "About 69 volts, because line voltage in a wye is the winding voltage divided by 1.732."
    },
    "answer": "C",
    "explanation": "In a wye connection the line voltage spans two windings that are 120 degrees apart, so it equals 1.732 times the phase voltage: 120 x 1.732 is 207.8 volts. Simple addition would apply only if the windings were in phase. Equal values describe a delta, where line and phase voltage match. Dividing by 1.732 reverses the relationship and applies to line current in a delta.",
    "id": 180
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "A 45 kVA three-phase transformer has a 480 volt delta primary. What is the primary line current at full load?",
    "options": {
      "A": "About 94 amperes, found from 45,000 divided by 480 volts with no square root factor.",
      "B": "About 54 amperes, found from 45,000 divided by 1.732 times 480 volts.",
      "C": "About 125 amperes, found from 45,000 divided by 1.732 times the 208 volt secondary voltage.",
      "D": "About 31 amperes, found from the 54 ampere line current divided by 1.732 once more."
    },
    "answer": "B",
    "explanation": "Three-phase line current equals kVA x 1,000 divided by 1.732 times line voltage: 45,000 divided by 831.4 is 54.1 amperes. Leaving out the 1.732 factor gives the single-phase answer, which is too high. Using the secondary voltage gives the secondary current, not the primary. Dividing again by 1.732 would give the winding current inside the delta, not the current in the line.",
    "id": 181
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "A 75 kVA transformer has a 208Y/120 volt secondary. What is the full-load current in each secondary line?",
    "options": {
      "A": "About 208 amperes, found from 75,000 divided by 1.732 times 208 volts.",
      "B": "About 360 amperes, found from 75,000 divided by 208 volts with no square root factor.",
      "C": "About 625 amperes, found from 75,000 divided by the 120 volt line-to-neutral voltage.",
      "D": "About 120 amperes, found from 208 amperes divided by 1.732 for the winding current."
    },
    "answer": "A",
    "explanation": "Using the line voltage of 208 volts, current is 75,000 divided by 360.3, or 208.2 amperes. Omitting the 1.732 factor treats the circuit as single-phase. Dividing by 120 volts mixes a single-phase value into a three-phase formula. In a wye the winding current already equals the line current, so dividing by 1.732 is not appropriate.",
    "id": 182
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "Two 25 kVA single-phase transformers are connected in open delta. Approximately what three-phase load can the bank carry?",
    "options": {
      "A": "About 50 kVA, because two units added together carry their full combined rating.",
      "B": "About 75 kVA, because an open delta carries the same load as a full bank.",
      "C": "About 25 kVA, because only one transformer of the pair carries the load at a time.",
      "D": "About 43.3 kVA, which is 86.6 percent of the combined rating of the two units."
    },
    "answer": "D",
    "explanation": "In an open delta each transformer carries the full line current, so capacity is 1.732 times the rating of one unit, or 86.6 percent of the two combined: 0.866 x 50 is 43.3 kVA. The combined rating cannot be fully used. A full bank of three would give 75 kVA, which an open delta cannot match. Both transformers work together, not in turns.",
    "id": 183
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "In a 240 volt four-wire delta system, the neutral comes from the center of one winding. What voltage appears between neutral and the high leg?",
    "options": {
      "A": "About 120 volts, since every conductor reads the same to neutral.",
      "B": "About 208 volts, found from 120 volts times 1.732.",
      "C": "About 240 volts, since the high leg connects directly to the other line.",
      "D": "About 170 volts, found from 240 volts times 0.707 as for a peak value."
    },
    "answer": "B",
    "explanation": "The neutral sits at the midpoint of a 240 volt winding, so the two end lines read 120 volts. The third line is farther away and reads 120 x 1.732, about 208 volts, which is why it is marked orange and kept away from 120 volt loads. Equal readings would hold only in a wye. The 0.707 factor relates peak and RMS values and has nothing to do with this geometry.",
    "id": 184
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "Why must a delta-wye transformer never be connected in parallel with a delta-delta transformer?",
    "options": {
      "A": "The delta-wye output is shifted 30 degrees, so circulating current would flow between them.",
      "B": "The delta-wye unit has no neutral, so the two units cannot share a common connection point.",
      "C": "The delta-delta unit always has a higher frequency, so the two outputs can never match each other.",
      "D": "The delta-wye unit has twice the turns ratio, so it always overloads the other unit when connected."
    },
    "answer": "A",
    "explanation": "A delta-wye bank introduces a 30 degree phase shift between its primary and secondary, while a delta-delta bank introduces none. Paralleling them joins points that are not in phase, and a heavy circulating current results. The wye side actually supplies a neutral. Frequency is set by the source and is the same for both. Turns ratios can be matched but the phase shift cannot.",
    "id": 185
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "A delta winding carries 31.25 amperes in each phase winding. What current flows in each line conductor feeding it?",
    "options": {
      "A": "About 18 amperes, found by dividing the winding current by 1.732.",
      "B": "About 31 amperes, since line and winding current are equal in a delta.",
      "C": "About 54 amperes, found by multiplying the winding current by 1.732.",
      "D": "About 94 amperes, found by multiplying the winding current by three."
    },
    "answer": "C",
    "explanation": "In a delta each line current is the combination of two winding currents 120 degrees apart, so the line current is 1.732 times the winding current: 31.25 x 1.732 is 54.1 amperes. Dividing by 1.732 reverses the relationship. Equal currents describe a wye. A simple multiplication by three would apply only if the three currents were in phase, which they are not.",
    "id": 186
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "A 480 volt delta to 208Y/120 volt transformer is built from three single-phase units. What is the turns ratio of each unit?",
    "options": {
      "A": "2.31 to 1, because the line voltages are 480 volts and 208 volts on the two sides.",
      "B": "4 to 1, because each primary winding has 480 volts and each secondary winding makes 120.",
      "C": "1.732 to 1, because every three-phase connection includes the square root of three in its ratio.",
      "D": "8 to 1, because the secondary side is a wye and the winding voltage is halved."
    },
    "answer": "B",
    "explanation": "Each primary winding in the delta has the full 480 volts across it, and each secondary winding in the wye makes only 120 volts, so the turns ratio is 480 to 120, or 4 to 1. The 2.31 figure is the line-to-line ratio, which includes the wye factor. A ratio of 1.732 is the wye factor itself. A wye does not halve the voltage.",
    "id": 187
  },
  {
    "domain": "transformers",
    "chapter": 20,
    "question": "Two 15 kVA single-phase transformers are connected open delta at 240 volts. What is the largest balanced three-phase load they can carry?",
    "options": {
      "A": "About 30 kVA, which is the full combined rating of the two units.",
      "B": "About 45 kVA, which is the capacity of a complete three-unit bank.",
      "C": "About 26 kVA, which is 86.6 percent of the 30 kVA combined rating.",
      "D": "About 15 kVA, which is the rating of one unit alone."
    },
    "answer": "C",
    "explanation": "Open delta capacity is 86.6 percent of the combined rating: 0.866 x 30 is 25.98 kVA. A line current check agrees: each unit carries 15,000 divided by 240, or 62.5 amperes, and 1.732 x 240 x 62.5 is 25,980 volt-amperes. The combined rating cannot be reached, a three-unit bank requires a third transformer, and the load is shared, not limited to one unit.",
    "id": 188
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "What is the main purpose of the commutator and brushes in a DC generator?",
    "options": {
      "A": "They store extra magnetic energy so that the field poles can stay magnetized between starts.",
      "B": "They raise the generated voltage by adding extra turns to the armature as the machine speeds up.",
      "C": "They keep the armature cool by carrying heat from the rotating coils out to the frame.",
      "D": "They convert the alternating voltage induced in the armature coils into one-directional output."
    },
    "answer": "D",
    "explanation": "Each armature coil produces an alternating voltage as it moves past the poles. The commutator and brushes switch connections at the right instant so the external circuit sees current in one direction. They do not store magnetic energy, they do not add turns or raise the voltage, and any cooling comes from air flow, not from the brushes.",
    "id": 189
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "A 240 volt DC motor has an armature resistance of 0.5 ohm and a counter EMF of 228 volts at full load. What is the armature current?",
    "options": {
      "A": "456 amperes, found from the 228 volt counter EMF divided by the armature resistance.",
      "B": "480 amperes, found from the 240 volt supply divided by the armature resistance alone.",
      "C": "24 amperes, found from the 12 volt difference divided by the armature resistance.",
      "D": "12 amperes, found from the 12 volt difference without dividing by any resistance."
    },
    "answer": "C",
    "explanation": "Armature current equals the supply voltage minus the counter EMF, divided by armature resistance: (240 - 228) / 0.5 is 24 amperes. Dividing the counter EMF by the resistance, or the supply by the resistance, ignores one of the two voltages in the formula. The 480 ampere result is the starting current when no counter voltage exists, and skipping the division confuses volts with amperes.",
    "id": 190
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "The same 240 volt motor, with 0.5 ohm armature resistance, is connected directly across the supply at standstill. What is the starting current?",
    "options": {
      "A": "About 24 amperes, because the motor always draws its full-load current when it is first connected.",
      "B": "About 480 amperes, because no counter EMF exists and only armature resistance limits the current.",
      "C": "About 228 amperes, because the counter EMF is already present at the first instant of connection.",
      "D": "About 120 amperes, because the starting current is always one half of the supply voltage."
    },
    "answer": "B",
    "explanation": "At standstill no voltage is induced in the armature, so the current is 240 divided by 0.5, or 480 amperes, twenty times full load. Full-load current is reached only after the motor accelerates. Counter EMF does not exist until the armature turns. The half-of-voltage rule has no basis. A starting resistor or reduced voltage is therefore needed.",
    "id": 191
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "Why must a DC series motor never be started with no load connected?",
    "options": {
      "A": "The field winding burns out at once because no load current is available to cool it.",
      "B": "The brushes lift off the commutator surface whenever no load is attached to the motor shaft.",
      "C": "Weak field at low current lets speed rise without limit and the rotor can fly apart.",
      "D": "The supply voltage doubles itself because no load current is flowing through the series field winding."
    },
    "answer": "C",
    "explanation": "In a series motor the armature current also makes the field. With no load the current is small, the flux is weak, and the speed climbs toward destructive levels because speed varies inversely with flux. The field winding is not harmed by light current, the brushes stay pressed on the commutator by their springs, and the supply voltage does not change because of the motor's own current.",
    "id": 192
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "A shunt motor runs at 1,800 rpm with no load and 1,725 rpm at full load. What is its speed regulation?",
    "options": {
      "A": "About 4.35 percent, found from the 75 rpm change divided by the full-load speed.",
      "B": "About 4.17 percent, found from the 75 rpm change divided by the no-load speed.",
      "C": "About 75 percent, found from the change in rpm without dividing by any speed.",
      "D": "About 95.8 percent, found from the full-load speed divided by the no-load speed."
    },
    "answer": "A",
    "explanation": "Speed regulation is the change in speed divided by the full-load speed: 75 divided by 1,725 is 0.0435, or 4.35 percent. Dividing by the no-load speed gives a close but wrong value. Using the raw change in rpm is not a percentage. The ratio of full-load to no-load speed is a different quantity and describes how much speed remains, not how much it changed.",
    "id": 193
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "An electrician must reverse the rotation of a DC shunt motor. Which action does this correctly?",
    "options": {
      "A": "Reverse both the armature connections and the field connections so that each is changed.",
      "B": "Reverse the armature connections or the field connections, but never both at the same time.",
      "C": "Swap the two supply lines ahead of the drive so the polarity of the whole motor reverses.",
      "D": "Increase the field resistance until the motor slows, stops, and then begins to turn backward."
    },
    "answer": "B",
    "explanation": "Torque direction depends on the direction of the field and the armature current together, so reversing just one of them changes the rotation. Reversing both leaves the motor turning the same way as before. Swapping the supply lines ahead of a shunt motor reverses both currents at once, so the direction stays the same. Adding field resistance changes speed but never reverses direction.",
    "id": 194
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "What is the rated torque of a 5 horsepower motor running at 1,750 rpm?",
    "options": {
      "A": "About 21 lb-ft, found from 5 times 5,252 divided by 1,250 rpm.",
      "B": "About 0.17 lb-ft, found from 5 divided by 1,750 and multiplied by 60.",
      "C": "About 15 lb-ft, found from 5 times 5,252 divided by the 1,750 rpm.",
      "D": "About 12 lb-ft, found from 5 times 1,750 divided by 746 watts."
    },
    "answer": "C",
    "explanation": "Torque in pound-feet equals horsepower times 5,252 divided by rpm: 26,260 divided by 1,750 is 15.0 lb-ft. A different speed gives a different torque. Dividing horsepower by rpm without the constant leaves the units and magnitude wrong. Multiplying horsepower by rpm and dividing by 746 mixes power conversion with torque and produces no meaningful torque value.",
    "id": 195
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "A generator produces 125 volts with no load and has an armature resistance of 0.1 ohm. What is the terminal voltage at 40 amperes?",
    "options": {
      "A": "121 volts, because the 4 volt armature drop is subtracted from the generated voltage.",
      "B": "129 volts, because the armature drop is added to the generated voltage when current flows.",
      "C": "125 volts, because the terminal voltage of a generator never changes whenever load current changes.",
      "D": "85 volts, because the full 40 ampere load current is subtracted directly from the generated voltage."
    },
    "answer": "A",
    "explanation": "The armature drop is current times resistance: 40 x 0.1 is 4 volts. Terminal voltage is the generated voltage minus this drop, so 121 volts. Adding the drop would give a voltage higher than the armature created, which is impossible. Terminal voltage does fall as load current rises, so it is not constant. Subtracting the 40 amperes directly treats a current as if it were a voltage.",
    "id": 196
  },
  {
    "domain": "motors",
    "chapter": 21,
    "question": "A technician wants a shunt motor to run above its rated base speed. Which method raises the speed?",
    "options": {
      "A": "Add resistance in the armature circuit to raise the voltage reaching the commutator and the brushes.",
      "B": "Reverse the field leads so that the flux strengthens and the counter EMF falls at once.",
      "C": "Raise the mechanical load on the shaft so that the counter EMF has to increase to match.",
      "D": "Add resistance to the field circuit to weaken the flux, which raises speed and lowers torque."
    },
    "answer": "D",
    "explanation": "Speed is proportional to counter voltage divided by flux, so weakening the field makes the motor turn faster, with less torque per ampere of armature current. Extra armature resistance drops voltage across the armature and lowers speed. Reversing the field leads reverses the rotation instead of changing speed. More mechanical load slows the motor, which lowers the counter EMF rather than raising it.",
    "id": 197
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "Why can a single-phase induction motor with only its main winding connected not start on its own?",
    "options": {
      "A": "One winding makes a pulsating field that equals two opposite rotating fields, so starting torque is zero.",
      "B": "One winding makes a field that rotates in a single direction, which pulls the rotor against itself.",
      "C": "The supply frequency is too low for a single winding to magnetize the iron in the stator.",
      "D": "The rotor bars need direct current from the stator to start, and single-phase supply has none."
    },
    "answer": "A",
    "explanation": "A single winding on alternating current produces a field that stays in one place and pulses. That is equivalent to two equal fields rotating in opposite directions, which pull the stationary rotor equally both ways, so net torque is zero. The field does not rotate in one direction. Frequency is adequate for magnetizing, and induction rotors do not need direct current.",
    "id": 198
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "What is the synchronous speed of a 6-pole induction motor on a 60 hertz supply?",
    "options": {
      "A": "1,800 rpm, found from 120 times 60 divided by 4 poles.",
      "B": "3,600 rpm, found from 120 times 60 divided by 2 poles.",
      "C": "1,200 rpm, found from 120 times 60 divided by 6 poles.",
      "D": "720 rpm, found from 120 times 60 divided by 10 poles."
    },
    "answer": "C",
    "explanation": "Synchronous speed equals 120 times frequency divided by poles: 7,200 divided by 6 is 1,200 rpm. Using four poles gives 1,800 rpm, which would be the speed of a different motor. Two poles gives 3,600 rpm. Ten poles would give 720 rpm. Each result uses a pole count that does not match the stated six-pole motor.",
    "id": 199
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "A capacitor-start motor hums and does not turn, but it starts and runs when the shaft is spun by hand. Which fault is most likely?",
    "options": {
      "A": "The main winding has shorted turns, so the motor cannot develop torque at any speed.",
      "B": "The bearings are frozen solid, so the shaft cannot be turned even with hand force.",
      "C": "The supply voltage is too high, so the field is too strong to allow rotor movement.",
      "D": "The start capacitor or start circuit has failed, so no rotating field forms at standstill."
    },
    "answer": "D",
    "explanation": "A motor that runs once pushed has a good main winding and free bearings. The missing piece is the starting phase shift, supplied by the start capacitor, start winding, or centrifugal switch. Shorted turns in the main winding would hurt running performance. Frozen bearings would prevent hand rotation. High voltage does not stop a rotor from moving.",
    "id": 200
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "Which single-phase motor is the usual choice for a small bathroom exhaust fan that needs low cost and little starting torque?",
    "options": {
      "A": "The shaded-pole motor, which has no switch or capacitor and only weak starting torque.",
      "B": "The capacitor-start motor, which carries a large start capacitor and gives very strong starting torque.",
      "C": "The universal motor, which has brushes and runs at several thousand rpm with great torque.",
      "D": "The repulsion motor, which has a commutator and is commonly sold new for household fans."
    },
    "answer": "A",
    "explanation": "A small exhaust fan needs little starting torque, so the cheap, simple shaded-pole motor is a good fit, with nothing to wear out but the bearings. A capacitor-start motor is larger and more costly than the job needs. A universal motor is noisy and wears its brushes. Repulsion motors are no longer sold as ordinary household fan motors.",
    "id": 201
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "A 4-pole motor on 60 hertz turns at 1,725 rpm under full load. What is its slip?",
    "options": {
      "A": "About 4.35 percent, found from the 75 rpm difference divided by 1,725 rpm.",
      "B": "About 95.8 percent, found from the rotor speed divided by synchronous speed.",
      "C": "About 4.17 percent, found from the 75 rpm difference divided by 1,800 rpm.",
      "D": "About 75 percent, found from the rpm difference with no division by any speed."
    },
    "answer": "C",
    "explanation": "Slip is the speed difference divided by synchronous speed, 1,800 for four poles on 60 hertz: 75 divided by 1,800 is 4.17 percent. Dividing by the rotor speed gives a slightly different, wrong number. The ratio of rotor to synchronous speed, 95.8 percent, describes how much speed remains, not the slip. The raw difference is not a percentage.",
    "id": 202
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "An electrician must reverse a capacitor-start motor that has its leads accessible. What is the correct action?",
    "options": {
      "A": "Swap the two line conductors feeding the motor at the disconnect switch.",
      "B": "Swap the start winding leads while leaving the main winding leads unchanged.",
      "C": "Swap the capacitor leads so the charge flows in the opposite direction.",
      "D": "Swap the main winding leads and the start winding leads at the same time."
    },
    "answer": "B",
    "explanation": "Rotation reverses when the start winding is reversed relative to the main winding. Swapping the line conductors reverses both windings together, so the rotation direction stays exactly the same as before. A motor capacitor does not set direction by its lead orientation, and non-polarized motor capacitors can be connected either way round. Reversing both windings at once also restores the original rotation, so only one winding should be changed.",
    "id": 203
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "What is the capacitive reactance of a 40 microfarad motor run capacitor on a 60 hertz supply?",
    "options": {
      "A": "About 15 ohms, found from 2 pi times 60 times 0.000040 multiplied by 1,000.",
      "B": "About 0.015 ohm, found from 2 pi times 60 times 0.000040 without inverting.",
      "C": "About 150 ohms, found from 40 microfarads multiplied by the 60 hertz frequency.",
      "D": "About 66 ohms, found from 1 divided by 2 pi times 60 times 0.000040."
    },
    "answer": "D",
    "explanation": "Capacitive reactance equals 1 divided by 2 pi f C. The product 2 x 3.1416 x 60 x 0.000040 is 0.01508, and its reciprocal is 66.3 ohms. Leaving out the reciprocal gives 0.015, which is the denominator rather than the reactance. Multiplying by 1,000 and the product of frequency and capacitance are not valid ways to calculate the reactance.",
    "id": 204
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "A motor has a dual-voltage main winding made of two equal halves. How are the halves connected for operation on 230 volts?",
    "options": {
      "A": "In parallel, so that each half receives the full 230 volts.",
      "B": "In series, so that each half receives the full 230 volts.",
      "C": "In series, so that each half still receives 115 volts.",
      "D": "In parallel, so that each half receives half of 115 volts."
    },
    "answer": "C",
    "explanation": "Series connection divides the 230 volt supply between the two halves, so each half sees 115 volts, the same as it would in a parallel connection at 115 volts. Parallel connection at 230 volts would put full line voltage across each half, overheating the winding. A series connection cannot give each half the full supply voltage.",
    "id": 205
  },
  {
    "domain": "motors",
    "chapter": 22,
    "question": "A 1/2 horsepower, 115 volt motor has 60 percent efficiency and 0.65 power factor at full load. What is the line current?",
    "options": {
      "A": "About 3.2 amperes, found from 373 watts divided by 115 volts with no other factors.",
      "B": "About 5.0 amperes, found from 373 watts divided by the product of 115 volts and 0.65.",
      "C": "About 13.0 amperes, found from 622 watts divided by the product of 115 volts and 0.416.",
      "D": "About 8.3 amperes, found from 622 watts divided by the product of 115 volts and 0.65."
    },
    "answer": "D",
    "explanation": "Output is 373 watts. Input at 60 percent efficiency is 621.7 watts. Current equals input divided by volts times power factor, so 621.7 divided by 74.75 gives 8.3 amperes. Using the output instead of the input ignores efficiency. Dividing by only the power factor leaves out the loss, and an incorrect factor in the denominator inflates the answer.",
    "id": 206
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "Why does a three-phase induction motor start without any capacitor or starting switch?",
    "options": {
      "A": "The supply makes a field that rotates from the first instant and drags the rotor along.",
      "B": "Its rotor is connected directly to the line, so current starts it without any magnetic field.",
      "C": "Its squirrel cage stores charge from the supply and releases it to start the rotor turning.",
      "D": "Its three windings are connected in series so that their fields add up to form a steady push."
    },
    "answer": "A",
    "explanation": "The three currents are 120 degrees apart in time and the windings are 120 degrees apart in space, which produces a smoothly rotating field even at standstill. The rotor has no outside connection and gets current by induction. A squirrel cage does not store charge. Windings in series do not produce a steady push, since a steady field would not move the rotor.",
    "id": 207
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "What is the synchronous speed of an 8-pole induction motor on a 60 hertz supply?",
    "options": {
      "A": "1,200 rpm, found from 120 times 60 divided by 6 poles.",
      "B": "450 rpm, found from 120 times 60 divided by 16 poles.",
      "C": "900 rpm, found from 120 times 60 divided by 8 poles.",
      "D": "1,800 rpm, found from 120 times 60 divided by 4 poles."
    },
    "answer": "C",
    "explanation": "Synchronous speed equals 120 times frequency divided by poles: 7,200 divided by 8 is 900 rpm. Using six poles gives 1,200 rpm, using sixteen poles gives 450 rpm, and using four poles gives 1,800 rpm. Each wrong value comes from a pole count that does not belong to the eight-pole motor described in the question.",
    "id": 208
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "A 10 horsepower, 460 volt three-phase motor runs at 90 percent efficiency and 0.85 power factor. What is the line current?",
    "options": {
      "A": "About 19.1 amperes, found from 7,460 watts divided by the product of 460 volts and 0.85 with no square root factor.",
      "B": "About 12.2 amperes, found from 8,289 watts divided by 1.732 x 460 x 0.85.",
      "C": "About 9.4 amperes, found from 7,460 watts divided by 1.732 x 460 with no other factors.",
      "D": "About 14.0 amperes, taken directly from the code table and not from any calculation."
    },
    "answer": "B",
    "explanation": "Output is 7,460 watts, input at 90 percent efficiency is 8,289 watts, and current is input divided by 1.732 x 460 x 0.85, or 677.2, which gives 12.2 amperes. Dividing by only the voltage and power factor treats the motor as single-phase. Leaving out efficiency and power factor understates the current. The 14 ampere value is a code table figure, not a calculation from these data.",
    "id": 209
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "A technician needs a three-phase pump motor to turn the opposite way. Which action reverses it?",
    "options": {
      "A": "Swap all three line leads so that each one moves to a new terminal.",
      "B": "Swap the neutral lead and one line lead so the supply is reversed.",
      "C": "Swap the motor frame ground and one line lead to flip the field.",
      "D": "Swap any two of the three line leads at the motor or starter."
    },
    "answer": "D",
    "explanation": "Interchanging any two lines reverses the phase sequence and the rotating field. Moving all three leads in a rotation only changes which line goes where in a circle, which keeps the same sequence. Three-phase motors do not use a neutral, and the equipment ground carries no operating current, so exchanging it with a line lead is both ineffective and dangerous.",
    "id": 210
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "Line-to-line voltages at a motor read 460, 455 and 472 volts. What is the percent voltage unbalance?",
    "options": {
      "A": "About 2.1 percent, from the largest deviation of 9.7 volts over the 462.3 volt average.",
      "B": "About 3.7 percent, found from the full spread of 17 volts divided by the 460 volt reading.",
      "C": "About 1.6 percent, found from the smallest deviation of 7.3 volts divided by the average.",
      "D": "About 0.4 percent, found from the 2 volt difference between the first two readings."
    },
    "answer": "A",
    "explanation": "The average of the three readings is 462.3 volts. The largest deviation from that average is 9.7 volts, from the 472 volt reading. Dividing 9.7 by 462.3 gives 2.1 percent. Using the full spread overstates the unbalance, using the smaller deviation understates it, and comparing only two readings ignores the third. The standard method always uses the greatest deviation from the three-reading average.",
    "id": 211
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "Which NEMA design letter suits a loaded conveyor that is hard to start and needs about 200 percent starting torque?",
    "options": {
      "A": "Design B, which gives normal starting torque with low starting current and low slip.",
      "B": "Design A, which gives normal starting torque with very high starting current and breakdown.",
      "C": "Design E, which gives high starting torque with the highest slip of all the designs.",
      "D": "Design C, which gives high starting torque with normal starting current and low slip."
    },
    "answer": "D",
    "explanation": "Design C is made for loads that start under pressure, such as loaded conveyors and crushers, with about 200 percent starting torque. Design B is the general-purpose type with normal torque. Design A is less common and is not defined by high starting torque. High slip is a Design D trait, and Design E is not the motor the question describes.",
    "id": 212
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "A 6-pole motor on 60 hertz turns at 1,140 rpm under full load. What is its slip?",
    "options": {
      "A": "6 percent, found from the 60 rpm difference divided by 1,000 rpm.",
      "B": "95 percent, found from the rotor speed divided by synchronous speed.",
      "C": "5 percent, found from the 60 rpm difference divided by 1,200 rpm.",
      "D": "5.3 percent, found from the 60 rpm difference divided by 1,140 rpm."
    },
    "answer": "C",
    "explanation": "Synchronous speed is 1,200 rpm, so slip is 60 divided by 1,200, which equals 5 percent. A divisor of 1,000 has no basis for this motor. The 95 percent figure is the fraction of synchronous speed the rotor reaches, not the slip. Dividing by the rotor speed instead of the synchronous speed gives a number that is close but incorrect.",
    "id": 213
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "A three-phase motor hums and will not start, and the two clamp readings show high current on two lines with none on the third. What is the most likely cause?",
    "options": {
      "A": "The rotor bars have broken, which makes the current drop to zero in only one line.",
      "B": "The motor is single-phasing because one supply conductor is open, such as a blown fuse.",
      "C": "The motor is wired for the wrong voltage, which would raise current equally in all lines.",
      "D": "The bearings are overgreased, which would reduce current on one line while raising the others."
    },
    "answer": "B",
    "explanation": "With one line open, the motor has only two lines connected and acts like a single-phase motor with no starting torque, so it hums and the two live lines carry high current. Broken rotor bars do not remove a supply line. A wrong voltage connection affects all three lines equally. Bearing grease cannot open a conductor.",
    "id": 214
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "A motor draws 84 amperes at locked rotor when started directly. What approximate line current results with a wye-delta starter?",
    "options": {
      "A": "About 48 amperes, which is the direct-start current divided by 1.732 once.",
      "B": "About 56 amperes, which is two thirds of the direct-start current.",
      "C": "About 28 amperes, which is one third of the direct-start current.",
      "D": "About 84 amperes, because a starter never changes the starting current."
    },
    "answer": "C",
    "explanation": "Starting in wye puts each winding on 58 percent of line voltage, which reduces line current to one third of the direct value: 84 divided by 3 is 28 amperes. Dividing by 1.732 once gives about 48 amperes, which is only the voltage reduction factor and not the current reduction. Two thirds is not the wye-delta ratio, and starters of this type do reduce the starting current substantially.",
    "id": 215
  },
  {
    "domain": "motors",
    "chapter": 23,
    "question": "A dual-voltage nine-lead wye motor is connected for 460 volts. How are its coil groups connected?",
    "options": {
      "A": "The two groups in each phase are in parallel, so each receives the full 460 volts.",
      "B": "The two groups in each phase are in series, so each receives the full 460 volts.",
      "C": "The two groups in each phase are in parallel, so each receives half of 230 volts.",
      "D": "Both groups in each phase are in series, each seeing the same voltage as at 230."
    },
    "answer": "D",
    "explanation": "For the higher voltage the coil groups are put in series, so each group receives half the phase voltage, which is the same as each group receives in the parallel low-voltage connection. Parallel groups on 460 volts would put the full phase voltage across each group and overheat the winding. Series groups cannot each receive the whole line voltage.",
    "id": 216
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "A motor nameplate lists a service factor of 1.15. What does this mean?",
    "options": {
      "A": "The motor can carry up to 115 percent of its rated horsepower continuously under normal conditions.",
      "B": "The motor draws 115 percent of full-load current at no load, whatever the voltage.",
      "C": "The motor may be run on a supply voltage that is 15 percent above the nameplate value.",
      "D": "The motor starts with a surge of 1.15 times full-load current during acceleration."
    },
    "answer": "A",
    "explanation": "A service factor is a continuous overload allowance, so 1.15 means 115 percent of rated horsepower under normal voltage, frequency and ambient temperature. It does not describe no-load current, which is far lower. It does not allow high supply voltage, which can damage the winding. Starting surge is described by the locked-rotor code letter, not the service factor.",
    "id": 217
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "A 15 horsepower, 460 volt three-phase motor has a table full-load current of 21 A. What is the minimum ampacity for the branch-circuit conductors?",
    "options": {
      "A": "About 21.0 amperes, found directly from the table current with no multiplier.",
      "B": "About 52.5 amperes, found from 250 percent of the 21 ampere table current.",
      "C": "About 26.3 amperes, found from 125 percent of the 21 ampere table current.",
      "D": "About 24.2 amperes, found from 115 percent of the 21 ampere table current."
    },
    "answer": "C",
    "explanation": "Motor branch-circuit conductors must carry at least 125 percent of the table full-load current: 1.25 x 21 is 26.25 amperes. The unmodified table current ignores continuous duty. The 250 percent figure is the maximum for an inverse-time breaker, which protects against short circuits and not conductors. The 115 percent figure is the minimum for a disconnect.",
    "id": 218
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "A motor nameplate shows 20.4 amperes and a service factor of 1.15. What is the maximum standard overload setting?",
    "options": {
      "A": "23.5 amperes, which is 115 percent of the nameplate full-load current.",
      "B": "25.5 amperes, which is 125 percent of the nameplate full-load current.",
      "C": "51.0 amperes, which is 250 percent of the nameplate full-load current.",
      "D": "20.4 amperes, which is exactly the nameplate full-load current."
    },
    "answer": "B",
    "explanation": "For a service factor of 1.15 or more, the maximum overload setting is 125 percent of nameplate current: 1.25 x 20.4 is 25.5 amperes. The 115 percent figure applies to motors with a lower service factor and no low temperature rise marking. The 250 percent value is a breaker limit. Setting the relay exactly at nameplate leaves no margin for normal variation and often trips needlessly.",
    "id": 219
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "A 10 horsepower, 460 volt motor has a code letter that corresponds to 6.0 kVA per horsepower. What is its approximate locked-rotor current?",
    "options": {
      "A": "About 16 amperes, found from 10 horsepower multiplied by 746 and divided by 460 volts.",
      "B": "About 130 amperes, found from 60 kVA divided by 460 volts alone.",
      "C": "About 75 amperes, found from 60 kVA divided by 1.732 times 460 volts.",
      "D": "About 60 amperes, found from the 6.0 kVA per horsepower multiplied by 10."
    },
    "answer": "C",
    "explanation": "Locked-rotor kVA is 10 x 6.0, which equals 60 kVA. Current is 60,000 divided by 1.732 x 460, or 75.3 amperes. Using horsepower times 746 gives only a running-level figure. Leaving out the 1.732 treats the circuit as single-phase and overstates the current. The 60 figure is the kVA itself, and the units cannot be swapped for amperes.",
    "id": 220
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "A motor has a table full-load current of 21 A. What is the maximum rating of a time-delay dual-element fuse for branch-circuit protection?",
    "options": {
      "A": "30 amperes, which is the next standard size above 125 percent, or 26.25 amperes.",
      "B": "50 amperes, which is the next standard size above 250 percent, or 52.5 amperes.",
      "C": "60 amperes, which is the next standard size above 300 percent, or 63 amperes.",
      "D": "40 amperes, which is the next standard size above 175 percent, or 36.75 amperes."
    },
    "answer": "D",
    "explanation": "The maximum for a dual-element time-delay fuse is 175 percent of table current: 1.75 x 21 is 36.75 amperes, and the next higher standard size is 40 amperes. Using 125 percent gives a conductor-sizing number. The 250 percent figure applies to inverse-time breakers, and 300 percent applies to non-time-delay fuses, so neither matches this device.",
    "id": 221
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "What is the minimum ampere rating for the disconnecting means of a motor with a table full-load current of 21 A?",
    "options": {
      "A": "About 24.2 amperes, which is 115 percent of the table full-load current.",
      "B": "About 26.3 amperes, which is 125 percent of the table full-load current.",
      "C": "About 36.8 amperes, which is 175 percent of the table full-load current.",
      "D": "About 21.0 amperes, which is exactly the table full-load current."
    },
    "answer": "A",
    "explanation": "The disconnect must be rated at least 115 percent of the table current: 1.15 x 21 is 24.15 amperes. The 125 percent figure is for conductors. The 175 percent value is a fuse limit. A disconnect rated at exactly the table current would have no margin for continuous duty, and the code does not accept that.",
    "id": 222
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "A 15 horsepower, 460 volt motor draws 21 A through 10 AWG copper, 150 feet one way, at 1.24 ohms per 1,000 feet. What is the percent voltage drop?",
    "options": {
      "A": "About 0.9 percent, found from 21 x 0.186 divided by 460.",
      "B": "About 1.5 percent, found from 1.732 x 21 x 0.186 divided by 460.",
      "C": "About 3.0 percent, found from 1.732 x 21 x 0.372 divided by 460.",
      "D": "About 6.8 percent, found by comparing the 6.8 volt drop to 100 volts."
    },
    "answer": "B",
    "explanation": "One conductor's resistance is 0.186 ohm. The three-phase drop is 1.732 x 21 x 0.186, which equals 6.77 volts, or 1.47 percent of 460. Leaving out the 1.732 gives the wrong value for a three-phase circuit. Doubling the length would apply to single-phase round trips, not to this formula. Comparing the drop to 100 volts uses an unrelated base.",
    "id": 223
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "A motor rated 230 volts is run on a 208 volt system. About what fraction of its rated torque is available?",
    "options": {
      "A": "About 82 percent, since torque varies with the square of the voltage ratio.",
      "B": "About 90 percent, since torque varies directly with the voltage ratio.",
      "C": "About 100 percent, since torque depends only on the load and not on voltage.",
      "D": "About 74 percent, since torque varies with the cube of the voltage ratio."
    },
    "answer": "A",
    "explanation": "The voltage ratio is 208 divided by 230, or 0.904, and torque varies with its square: 0.904 squared is 0.818. A direct ratio underestimates the loss of torque. Torque in an induction motor definitely depends on the applied voltage, so it is not constant. The cube rule belongs to fan power versus fan speed, and it does not apply to motor torque.",
    "id": 224
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "Which statement correctly separates the use of the code table current and the nameplate current?",
    "options": {
      "A": "The nameplate current sizes conductors and the breaker, while the table sets overload protection.",
      "B": "The table current sets overload protection, and the nameplate sizes only the disconnecting means.",
      "C": "The nameplate current sets all protection, and the table is used only for single-phase motors.",
      "D": "The table current sizes conductors and branch-circuit protection, while the nameplate current sets overload protection."
    },
    "answer": "D",
    "explanation": "The code table gives a standard full-load current for each horsepower and voltage so that conductors and short-circuit protection are consistent. The overload device must reflect the actual motor, so it is set from the nameplate. The other statements swap the two roles or limit the table to one kind of motor, which it does not.",
    "id": 225
  },
  {
    "domain": "motors",
    "chapter": 24,
    "question": "A 15 horsepower motor runs 6,000 hours a year. How much energy cost is saved by choosing 93 percent efficiency over 91 percent at 12 cents per kilowatt-hour?",
    "options": {
      "A": "About $19 per year, from a reduction of 0.027 kW in input power.",
      "B": "About $190 per year, from a reduction of 0.27 kW in input power.",
      "C": "About $1,900 per year, from a reduction of 2.7 kW in input power.",
      "D": "About $90 per year, from a reduction of 0.125 kW in input power."
    },
    "answer": "B",
    "explanation": "Output is 11.19 kW. Input at 91 percent is 12.30 kW and at 93 percent is 12.03 kW, a difference of 0.27 kW. Times 6,000 hours gives about 1,590 kWh, and at 12 cents that is about $190. The other figures come from moving the decimal point or from a wrong input difference, and none matches the arithmetic.",
    "id": 226
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "What happens inside an electromagnetic relay at the moment current begins to flow through its coil?",
    "options": {
      "A": "The coil becomes an electromagnet and pulls the armature in, which changes the contact state.",
      "B": "The coil heats a bimetal strip that bends slowly and pushes the contacts together after a long delay.",
      "C": "The coil generates a voltage that flows directly through the contacts and into the connected load circuit.",
      "D": "The coil releases stored spring energy that opens the contacts once the supply voltage reaches its peak value."
    },
    "answer": "A",
    "explanation": "The coil acts as an electromagnet, and its magnetic pull draws the armature to the core, so the linked contacts change state. A bimetal strip belongs to a thermal overload device and not to a standard relay, which acts quickly. The coil is electrically separate from the contacts, so no coil voltage flows into the load circuit. A return spring pulls the armature back when power is removed, but it does not store energy released by the supply voltage reaching a peak.",
    "id": 227
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "A Form C contact on a control relay has its coil off. Which pair of terminals is connected at that moment?",
    "options": {
      "A": "The common terminal and the normally open terminal are connected together and carry the circuit current.",
      "B": "The common terminal and the normally closed terminal are connected together and carry the circuit current.",
      "C": "The normally open terminal and the normally closed terminal are connected to each other through the coil.",
      "D": "None of the three terminals is connected to another one until the coil receives its rated voltage."
    },
    "answer": "B",
    "explanation": "With the coil off, the relay is in its normal state, and a changeover contact joins the common terminal to the normally closed terminal. Joining the common terminal to the normally open terminal happens only after the coil is energized. The normally open and normally closed terminals are never tied to each other, and the coil is not part of that path. A Form C contact always connects its common terminal to one of the two, so it is never fully isolated.",
    "id": 228
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "A relay has a 24 V DC coil with a measured resistance of 320 ohms. What current and power does the coil use at rated voltage?",
    "options": {
      "A": "About 13.3 A and 320 W, found by multiplying the voltage by the resistance.",
      "B": "About 0.75 A and 18 W, found by dividing the resistance by the voltage.",
      "C": "About 7.5 mA and 0.18 W, found by dividing the voltage by the resistance.",
      "D": "About 75 mA and 1.8 W, found by dividing voltage by resistance."
    },
    "answer": "D",
    "explanation": "Current equals voltage divided by resistance, so 24 / 320 gives 0.075 A, or 75 mA, and the power is 24 x 0.075 = 1.8 W. Multiplying the voltage by the resistance does not give a current and produces a meaningless figure. Dividing resistance by voltage inverts the formula and gives 13.3, not 0.75. A figure of 7.5 mA is off by a factor of ten, and the matching 0.18 W is likewise one tenth of the true power.",
    "id": 229
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "A technician must switch a 40 A electric heating load on and off from a thermostat signal. Why use a contactor rather than a small control relay?",
    "options": {
      "A": "A contactor has a smaller coil, so it draws less control current than any control relay can.",
      "B": "A contactor has heavier contacts and arc-handling features suited to carrying and interrupting large currents safely.",
      "C": "A contactor changes its contacts more slowly, which prevents any arc from forming across the gap.",
      "D": "A contactor does not need a return spring, so its contacts stay closed after a power loss."
    },
    "answer": "B",
    "explanation": "A contactor is built with large silver contacts, double-break action and arc chutes, so it can carry and interrupt heavy current without damage. Its coil is generally larger than a small relay coil, not smaller. Slow motion would increase arcing and does not prevent it. Contactors do use a return spring, and they drop out when the coil loses power, so they do not hold the contacts closed after a power loss.",
    "id": 230
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "A 24 V coil with 600 ohms of resistance is fed through two wires with a combined loop resistance of 6.4 ohms. What voltage reaches the coil?",
    "options": {
      "A": "24.00 V, because wire resistance has no effect on a coil that draws only a small current.",
      "B": "17.6 V, found by subtracting the wire resistance from the coil resistance and dividing.",
      "C": "23.40 V, found by subtracting 6.4 from the 24 V supply directly.",
      "D": "23.75 V, found from a series current of about 39.6 mA through the coil."
    },
    "answer": "D",
    "explanation": "The total series resistance is 606.4 ohms, so the current is 24 / 606.4 = 0.0396 A, and the coil voltage is 0.0396 x 600 = 23.75 V. The wire does drop a small amount of voltage, so full supply voltage at the coil is not right. Subtracting resistance from voltage mixes unlike units and gives the wrong figure of 23.40 V. Subtracting resistance values and dividing has no basis in the series circuit rule and cannot give 17.6 V.",
    "id": 231
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "On a control diagram, a contact is drawn as two vertical lines with a diagonal slash across the gap. What does that symbol mean?",
    "options": {
      "A": "The contact is damaged and must be bypassed before the machine is started.",
      "B": "The contact is normally closed and opens when its device is actuated.",
      "C": "The contact is normally open and closes when its operating device is actuated.",
      "D": "The contact is a fuse that melts when current exceeds its rated amount."
    },
    "answer": "B",
    "explanation": "The slash is the standard mark for a normally closed contact, which is closed with no power or force applied and opens when actuated. It does not indicate a defect, and nobody bypasses it. A normally open contact is drawn with a plain gap and no slash. A fuse has an entirely different symbol, usually a rectangle or a wavy line, and a contact of this kind does not melt open.",
    "id": 232
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "An off-delay timing relay has been set for 20 seconds. The coil is energized and then switched off. When do the timed contacts return to normal?",
    "options": {
      "A": "Immediately, at the moment the coil is first energized, before any timing has started.",
      "B": "After 20 seconds of continuous coil energization, when the timer finishes counting.",
      "C": "Twenty seconds after the coil is switched off, once the timing period ends.",
      "D": "Never, because an off-delay timer holds its contacts until it is manually reset."
    },
    "answer": "C",
    "explanation": "An off-delay timer changes its contacts as soon as the coil is energized, then starts counting when the coil is de-energized and returns the contacts after the preset time. Immediate return at energization is the opposite of that behavior. Counting during coil energization describes an on-delay timer. A manual reset is a feature of latching devices and is not part of a standard off-delay timer.",
    "id": 233
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "An AC contactor hums loudly while closed, and the noise stops when the armature is pressed by hand. Which cause is most likely?",
    "options": {
      "A": "A cracked or missing shading ring, or dirt on the pole faces, letting the armature vibrate.",
      "B": "A coil wired for 24 V DC that has been connected to a 24 V AC supply.",
      "C": "A normally closed auxiliary contact welded shut in the open position.",
      "D": "Too small a wire gauge in the load circuit feeding the connected motor."
    },
    "answer": "A",
    "explanation": "The shading ring holds the armature steadily while the AC flux passes through zero, so a cracked ring or dirty pole faces lets the armature buzz at line frequency. A DC coil on an AC supply would draw excess current and overheat, and its fault would show as heat and not a hum that stops when pressed. An auxiliary contact condition does not move the armature. Wire gauge in the load circuit has no effect on the mechanical noise of the magnet.",
    "id": 234
  },
  {
    "domain": "controls",
    "chapter": 25,
    "question": "A 100 VA control transformer supplies two contactors, each taking 70 VA on inrush and 12 VA sealed, plus a 2 VA pilot lamp. One contactor is sealed when the other picks up. What is the peak load?",
    "options": {
      "A": "26 VA, found by adding only the sealed values of the two coils and the lamp.",
      "B": "142 VA, found by adding both inrush values to the pilot lamp load.",
      "C": "164 VA, found by adding both inrush values and both sealed values together.",
      "D": "84 VA, found by adding one inrush, one sealed value and the pilot lamp."
    },
    "answer": "D",
    "explanation": "One coil is drawing its inrush of 70 VA while the other is sealed at 12 VA, and the lamp adds 2 VA, giving 84 VA, within the 100 VA rating. Adding only sealed values ignores the pull-in surge and understates the load. Adding both inrush values describes both contactors starting together, which does not match the stated sequence. Adding both inrush and both sealed values counts each coil in two states at once, which cannot happen.",
    "id": 235
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "In a standard start-stop circuit, where is the seal-in contact connected, and what is its purpose?",
    "options": {
      "A": "In series with the stop button, so that it interrupts the circuit as soon as the motor starts.",
      "B": "In parallel with the start button, so the coil stays energized after the button is released.",
      "C": "In series with the motor leads, so that it carries the full running current of the load.",
      "D": "In parallel with the overload contact, so that overload tripping does not interrupt the circuit."
    },
    "answer": "B",
    "explanation": "The seal-in contact is an auxiliary contact that closes with the starter and is wired across the start button, giving the coil a second path so the motor keeps running after the operator lets go. In series with the stop button it would break the circuit and prevent starting. It carries only coil current and is not in the motor leads. Placing it across the overload contact would defeat overload protection.",
    "id": 236
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "A motor nameplate lists 18.5 A full-load current and a service factor of 1.15. What is the usual maximum overload setting at 125 percent?",
    "options": {
      "A": "21.3 A, found by multiplying the nameplate current by the service factor of 1.15.",
      "B": "18.5 A, because the overload setting must never exceed the nameplate current.",
      "C": "25.9 A, found by multiplying the nameplate current by 1.40 as a first choice.",
      "D": "23.1 A, found by multiplying the nameplate current by 1.25."
    },
    "answer": "D",
    "explanation": "For a motor with a service factor of at least 1.15, the usual limit is 125 percent of nameplate current: 1.25 x 18.5 = 23.1 A. Multiplying by the service factor gives 21.3 A, which is a different rule and not the code percentage. Setting exactly at the nameplate is the best protection but is not the maximum allowed. The 140 percent figure is an allowance used only when the lower setting causes starting trips, so it is not the normal starting point.",
    "id": 237
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "A pump motor runs on three-wire start-stop control. The building loses power while the pump is running, and power returns minutes later. What happens?",
    "options": {
      "A": "The pump restarts immediately, because the seal-in contact remembers that it was running.",
      "B": "The pump restarts after the overload relay resets itself, which takes about five minutes.",
      "C": "The pump stays off until someone presses the start button again.",
      "D": "The pump restarts only if the stop button is pressed and released first."
    },
    "answer": "C",
    "explanation": "When power fails, the coil drops out and the seal-in contact opens, so on return of power neither the start button nor the seal-in path is closed, and the motor waits for an operator. That is low-voltage protection. The seal-in contact has no memory, because it is mechanical and opens with the coil. An overload reset is unrelated to a power loss. The stop button is already closed and has no role in the restart.",
    "id": 238
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "In a reversing starter, what is the main purpose of the electrical interlock wired between the forward and reverse contactors?",
    "options": {
      "A": "To prevent both contactors from closing together, which would short two supply lines.",
      "B": "To make the motor reverse faster by applying both directions of rotation at once.",
      "C": "To keep the motor running if the stop button is pressed by accident.",
      "D": "To lower the starting current by feeding the motor through both contactors at once."
    },
    "answer": "A",
    "explanation": "Reversing swaps two of the three lines, so closing both contactors together would join those lines directly and create a short circuit. The interlock uses a normally closed auxiliary contact from each contactor to block the other coil. Applying both directions at once would short the lines and not speed up reversal. An interlock has no role in disregarding a stop command. Feeding the motor through both contactors would raise the fault current, not reduce the starting current.",
    "id": 239
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "A motor draws 180 A locked-rotor on a 480 V line. An autotransformer starter on its 65 percent tap is used. Approximately what line current flows at start?",
    "options": {
      "A": "117 A, found by multiplying the locked-rotor current by 0.65 once.",
      "B": "180 A, because the transformer only changes voltage and not current.",
      "C": "76 A, found by multiplying the locked-rotor current by 0.65 squared.",
      "D": "58 A, found by dividing the locked-rotor current by the square root of 3."
    },
    "answer": "C",
    "explanation": "The motor sees 65 percent of the voltage and draws 65 percent of the current, and the transformer action reduces the line current by that ratio again, so the line current is 0.4225 x 180 = 76 A. The 117 A figure is the motor current, which is higher than what the line supplies. The transformer does change the current ratio, so 180 A is wrong. Dividing by the square root of 3 is a wye-delta voltage relationship and does not apply here.",
    "id": 240
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "Where should the normally closed STOP button be placed in a start-stop rung, and why?",
    "options": {
      "A": "In parallel with the start button, so that stopping and starting use the same path.",
      "B": "In series with the motor power leads, where it carries the full load current.",
      "C": "In parallel with the seal-in contact, so it can open that path alone.",
      "D": "In series ahead of the start button and seal-in contact, breaking both paths."
    },
    "answer": "D",
    "explanation": "To stop the motor, the stop button must open the circuit in front of both ways of energizing the coil, which are the start button and the seal-in contact. Placing it in parallel with the start button would make it function as another start path. A stop in the motor power leads would carry full load current and is not a control device at all. A stop in parallel with the seal-in contact would not interrupt the start path at all.",
    "id": 241
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "A thermal overload relay on a conveyor motor trips twice in a morning. What is the best first step?",
    "options": {
      "A": "Raise the trip setting to 140 percent so that the nuisance trips stop.",
      "B": "Find the cause by checking jams, bearings, voltage and running current.",
      "C": "Replace the overload relay with a larger one of the same class.",
      "D": "Bypass the overload contact until the next scheduled maintenance period arrives."
    },
    "answer": "B",
    "explanation": "A repeated trip is a symptom, so the cause must be found by checking the driven load, bearings, belts, supply voltage and the actual running current of every phase. Raising the setting hides the problem and allows the motor to overheat. A bigger relay of the same class provides the same lack of protection. Bypassing the overload contact removes the protection completely and is an unsafe practice that risks a burned-out motor and a fire.",
    "id": 242
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "A motor draws 240 A across the line in delta. About what line current does a wye-delta starter draw during the wye start?",
    "options": {
      "A": "138 A, found by dividing 240 A by the square root of 3.",
      "B": "160 A, found by taking two thirds of the delta starting current.",
      "C": "80 A, found by dividing the delta starting current by three.",
      "D": "120 A, found by halving the delta starting current for the wye connection."
    },
    "answer": "C",
    "explanation": "In wye, each winding sees 58 percent of line voltage, and the line current and torque fall to one third of the delta values, so 240 / 3 = 80 A. Dividing by the square root of 3 gives the winding voltage ratio, not the line current ratio. Two thirds is not a relationship found in this connection. Halving has no basis in the wye connection.",
    "id": 243
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "Why do most magnetic starters in industrial plants take their coil power from a control transformer instead of directly from the 480 V lines?",
    "options": {
      "A": "The transformer raises the voltage so the coil can pull in harder.",
      "B": "It lowers control voltage, adds isolation and permits secondary fusing.",
      "C": "The transformer removes the need for any overload relay in the circuit.",
      "D": "The transformer makes the seal-in contact unnecessary in a start-stop circuit."
    },
    "answer": "B",
    "explanation": "A control transformer steps 480 volts down to 120 volts, which lowers the shock hazard at pushbuttons and field devices, isolates the control from the power system, and allows secondary fusing and bonding of one leg. It lowers voltage and does not raise it. It has no effect on the need for overload protection, which still watches the motor. The seal-in contact is still required for three-wire control, because it holds the coil on after the button is released.",
    "id": 244
  },
  {
    "domain": "controls",
    "chapter": 26,
    "question": "A soft starter is installed on a 50 hp pump motor. Which statement describes how it reduces starting stress?",
    "options": {
      "A": "It connects the windings in wye, then switches to delta once the motor is up to speed.",
      "B": "It applies a fixed 50 percent voltage tap until the motor reaches full speed.",
      "C": "It adds resistance in series with the rotor so the motor starts more slowly.",
      "D": "It ramps the applied voltage up over several seconds using semiconductor switches."
    },
    "answer": "D",
    "explanation": "A soft starter uses silicon controlled rectifiers that delay their firing point in each cycle, so the motor voltage rises gradually along a set ramp, limiting current and mechanical shock, and it typically closes a bypass contactor afterward. Wye-delta switching describes a different type of starter. A fixed tap describes an autotransformer starter. Rotor resistance applies to wound-rotor motors and is not how a soft starter works on a squirrel-cage motor.",
    "id": 245
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "Which kind of drawing shows how a control circuit works without regard to where the devices are physically mounted?",
    "options": {
      "A": "A panel layout drawing, which locates each device on the back panel of the enclosure.",
      "B": "A one-line diagram, which shows the path of power from the utility to the main loads.",
      "C": "A schematic or ladder diagram, which arranges symbols by logic and not by position.",
      "D": "A wiring diagram, which draws every terminal and wire where the parts actually sit."
    },
    "answer": "C",
    "explanation": "A schematic or ladder diagram is arranged to show the logic of the circuit, so devices that are far apart in the plant can appear side by side on one rung. A panel layout does the opposite and fixes the physical location of each device. A one-line diagram reduces three-phase power distribution to a single line and does not explain control logic. A wiring diagram shows physical connections and terminal numbers, so it follows the real arrangement.",
    "id": 246
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "What is the main purpose of a one-line diagram?",
    "options": {
      "A": "To show every terminal screw and the color of every wire inside a control panel.",
      "B": "To show major equipment and the path of power, using one line per circuit.",
      "C": "To show how far apart outlets and switches are to be placed along each wall.",
      "D": "To show the ladder logic that decides when a motor starter coil energizes."
    },
    "answer": "B",
    "explanation": "A one-line diagram represents a three-phase system with a single line for each circuit and records the equipment and its ratings, so the path of power can be traced from the utility to the loads. Terminal screws and wire colors belong to wiring diagrams. Outlet and switch spacing belongs to a building plan. Ladder logic belongs to a schematic, and a one-line diagram does not describe how a coil is controlled.",
    "id": 247
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "A one-line diagram shows a 75 kVA transformer with a 208Y/120 V secondary. About how much full-load current can the secondary supply?",
    "options": {
      "A": "About 625 A, found by dividing 75,000 VA by 120 V.",
      "B": "About 360 A, found by dividing 75,000 VA by 208 V.",
      "C": "About 90 A, found by dividing 75,000 VA by 1.732 x 480 V.",
      "D": "About 208 A, found by dividing 75,000 VA by 1.732 x 208."
    },
    "answer": "D",
    "explanation": "For a three-phase source, the line current is the volt-amperes divided by 1.732 times the line voltage, so 75,000 / (1.732 x 208) = 75,000 / 360.3 = 208 A. Dividing by 120 volts ignores the three-phase relationship and the line-to-line voltage, giving 625 A. Dividing by 208 volts alone omits the 1.732 factor and gives 360 A. The 90 A figure is the primary current at 480 volts, not the secondary current.",
    "id": 248
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "In a control panel, how are wire numbers assigned to a control circuit?",
    "options": {
      "A": "Each wire receives its own unique number, so no two wires ever share a number.",
      "B": "Points that are electrically common share one number, and the number changes after each device.",
      "C": "The number depends only on wire color, with all red wires receiving the same number.",
      "D": "The number indicates the length of the wire in feet from the panel to the device."
    },
    "answer": "B",
    "explanation": "The rule is that all points joined without a device in between carry the same number, and the number changes on the far side of a contact, switch or coil. Unique numbers for every wire segment would break the link between wires that are really one conductor. Color does not set the number, because colors only suggest voltage class. Length is never encoded in a wire number, which exists to identify a point in the circuit.",
    "id": 249
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "On a plan drawn at 1/4 inch = 1 foot, a wall measures 5.5 inches. How long is the wall?",
    "options": {
      "A": "22 feet, found by dividing 5.5 inches by 0.25.",
      "B": "1.4 feet, found by multiplying 5.5 inches by 0.25.",
      "C": "5.5 feet, because the drawing and the wall use the same unit.",
      "D": "44 feet, found by multiplying 5.5 inches by 8 for a half-scale drawing."
    },
    "answer": "A",
    "explanation": "Each quarter inch on the drawing stands for one foot, so the wall is 5.5 / 0.25 = 22 feet. Multiplying by 0.25 reverses the scale and shrinks the length instead of enlarging it. The numeric value of the measurement on paper is not the real length, because the scale changes it. A half-scale multiplication of 8 has no basis in a quarter-inch scale and gives a length twice too great.",
    "id": 250
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "A small table beside coil CR3 reads 4, 7 with a line under the 7. What does it tell you?",
    "options": {
      "A": "Contacts of CR3 are on lines 4 and 7, and both are normally open.",
      "B": "CR3 has a normally open contact on line 4, a normally closed one on 7.",
      "C": "CR3 has a normally closed contact on line 4 and a normally open one on 7.",
      "D": "CR3 appears on lines 4 and 7, and the line means that it is faulty."
    },
    "answer": "B",
    "explanation": "In the usual cross-reference convention, a plain number marks a normally open contact and an underlined number marks a normally closed contact, so line 4 is normally open and line 7 is normally closed. Saying both are normally open ignores the underline. Reversing the two gets the convention backwards. The underline is never a fault mark, and it carries information about the contact's resting state.",
    "id": 251
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "A 208Y/120 V panel has phase totals of 7.2 kVA on A, 5.1 kVA on B and 6.3 kVA on C. Which phase is farthest from the average?",
    "options": {
      "A": "Phase B, which is 1.1 kVA below the 6.2 kVA average.",
      "B": "Phase A, which is 2.1 kVA above the average of 5.1 kVA.",
      "C": "Phase C, which is 0.1 kVA above the average of 6.2 kVA.",
      "D": "Phase B, which is 1.1 kVA above the average of 6.2 kVA."
    },
    "answer": "A",
    "explanation": "The total is 18.6 kVA and the average is 6.2 kVA per phase. Phase B at 5.1 kVA is 1.1 kVA below, and phase A at 7.2 kVA is 1.0 kVA above, so phase B is farthest. Taking 5.1 kVA as the average, as the answer naming phase A does, uses the smallest phase and not the mean. Phase C is only 0.1 kVA from the average, which is the closest. Calling phase B above the average gets the direction of the difference wrong.",
    "id": 252
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "A technician needs to know exactly which terminal block screw a sensor wire lands on in a panel. Which drawing is the best choice?",
    "options": {
      "A": "The one-line diagram, because it lists all conductors by terminal.",
      "B": "The building floor plan, because it shows the panel location.",
      "C": "The wiring diagram, because it shows each wire and terminal.",
      "D": "The ladder schematic, because it shows terminal screws in physical order."
    },
    "answer": "C",
    "explanation": "A wiring or connection diagram is drawn to show how the circuit is physically built, listing the wires, colors and numbered terminals on the strips. A one-line diagram is too general and does not list individual control terminals. A floor plan shows where the panel is in the building and says nothing about its internal terminals. A ladder schematic arranges symbols by logic, and it does not show the physical order of terminal screws.",
    "id": 253
  },
  {
    "domain": "controls",
    "chapter": 27,
    "question": "A technician finds that the print inside a panel door is revision B, while the office file lists revision D. What is the best action?",
    "options": {
      "A": "Stop, obtain the current revision and verify it before working from any drawing.",
      "B": "Continue with revision B, since the panel has been working with it for years.",
      "C": "Compare the two by memory and then go with whichever seems more likely.",
      "D": "Work from revision B but mark any differences in red after the job."
    },
    "answer": "A",
    "explanation": "A drawing is only trustworthy at its current revision, because later revisions record changes that may affect wiring, wire numbers or devices, so the correct step is to obtain and use the latest one. Continuing with revision B because the panel has run for years ignores the changes recorded since. Comparing from memory is unreliable and invites errors. Working from a known out-of-date print and marking differences afterward risks wrong wiring during the job.",
    "id": 254
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "What is the minimum number of small-appliance branch circuits required to serve the kitchen countertop and dining receptacles in a dwelling?",
    "options": {
      "A": "One 15 ampere circuit shared with the kitchen lighting.",
      "B": "One 20 ampere circuit shared with the laundry receptacle.",
      "C": "Three 20 ampere circuits, one for each countertop wall.",
      "D": "Two 20 ampere circuits that serve these receptacles only."
    },
    "answer": "D",
    "explanation": "The code requires at least two 20 ampere small-appliance circuits to serve the kitchen, pantry, breakfast room and dining room receptacles, kept for those receptacles. A single 15 ampere circuit is too small and may not be shared with lighting. The laundry has its own separate 20 ampere circuit and cannot be combined with this one. Three circuits are not required, since the rule sets a minimum of two and ties it to the room types rather than to countertop walls.",
    "id": 255
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "What is the maximum overcurrent protection normally allowed for 14 AWG copper conductors in a dwelling branch circuit?",
    "options": {
      "A": "30 amperes, because insulation is rated for 90 degrees Celsius.",
      "B": "20 amperes, since most receptacles in homes are rated for 20 amperes.",
      "C": "15 amperes, under the small conductor rule for 14 AWG copper.",
      "D": "25 amperes, which is the next standard size above 20."
    },
    "answer": "C",
    "explanation": "The small conductor rule limits 14 AWG copper to a 15 ampere breaker or fuse, in line with the 60 degree Celsius column of the ampacity table used for NM cable. A 30 ampere limit belongs to 10 AWG wire, and the 90 degree insulation rating is used only for derating work. A 20 ampere breaker goes with 12 AWG wire, and the rating of the receptacle does not raise the wire limit. A 25 ampere size is not an allowed rating for 14 AWG wire.",
    "id": 256
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "A house has 2,400 square feet of floor area. Using 3 VA per square foot at 120 volts, what is the minimum number of 20 ampere general lighting circuits?",
    "options": {
      "A": "One circuit, since 2,400 square feet divided by 120 V gives just 20 A.",
      "B": "Four circuits, found by wrongly using a 15 ampere rating for each circuit.",
      "C": "Six circuits, found by dividing 7,200 VA by an arbitrary 1,200 VA each.",
      "D": "Three circuits, since 7,200 VA is 60 A and 60 / 20 is 3."
    },
    "answer": "D",
    "explanation": "The general load is 2,400 x 3 = 7,200 volt-amperes, or 60 amperes at 120 volts, and 60 amperes divided by 20 ampere circuits is exactly 3. Using only the square footage, without the 3 volt-ampere factor, gives 20 amperes and the wrong answer of one. Four circuits would apply to 15 ampere circuits, but the question specifies 20 ampere circuits. Six circuits comes from dividing by an arbitrary 1,200 VA figure with no basis in the calculation.",
    "id": 257
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "An unbroken wall in a bedroom is 14 feet long with no doors or openings. What is the minimum number of receptacles needed on that wall?",
    "options": {
      "A": "One, placed at the center, since the wall is under 15 feet long overall.",
      "B": "Two, so no point on the wall is over 6 feet from one.",
      "C": "Three, because one receptacle is needed for every 5 feet of wall.",
      "D": "None, if the receptacles on the adjoining walls are close enough."
    },
    "answer": "B",
    "explanation": "One receptacle at the center leaves the wall ends 7 feet away, which exceeds the 6 foot limit, so two receptacles are needed. They can be placed to keep every point within the limit. The rule does not require one for every 5 feet, so three are more than the minimum. A wall space 2 feet or wider needs its own receptacle, and receptacles on neighboring walls cannot be counted for this wall's floor line.",
    "id": 258
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "Which dwelling location requires GFCI protection for 125 volt, 15 and 20 ampere receptacles?",
    "options": {
      "A": "A bedroom wall where a bedside lamp is plugged in.",
      "B": "A hallway receptacle used for a vacuum cleaner.",
      "C": "A kitchen countertop receptacle used for a toaster.",
      "D": "A living room receptacle used for a television."
    },
    "answer": "C",
    "explanation": "Kitchens are listed among the locations that need GFCI protection because water and grounded surfaces are present near countertop appliances. A bedroom, a hallway and a living room are not on the GFCI list, though they do fall under the arc-fault protection rules. The need for GFCI protection depends on the location of the receptacle and not on what plugs into it, so the lamp, vacuum and television uses do not change the answer.",
    "id": 259
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "In a three-way switch circuit, how is the common terminal of each switch used?",
    "options": {
      "A": "One common connects to the hot source, the other to the lamp.",
      "B": "Both common terminals connect to the neutral conductor, and the travelers feed the lamp.",
      "C": "Both common terminals connect to the travelers, and the lamp connects to the neutral.",
      "D": "One common terminal connects to the ground, and the other connects to the neutral."
    },
    "answer": "A",
    "explanation": "The common terminal of one switch receives the hot source and the common of the other goes to the lamp, while the two travelers join the remaining terminals of the switches. The neutral does not pass through the switch contacts, so tying both commons to it would give no switching. Placing the travelers on the commons is the error that leaves the lamp dead or stuck. The grounding conductor never passes through a switch, so it cannot be used as a common.",
    "id": 260
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "A 12 AWG circuit about 100 feet long carries 16 A. Using 2.0 ohms per 1000 feet, what is the voltage drop and percent drop at 120 V?",
    "options": {
      "A": "About 3.2 V, which is 2.7 percent, using only the one-way length of 100 feet.",
      "B": "About 1.6 V, which is 1.3 percent, using half of the conductor length.",
      "C": "About 12.8 V, which is 10.7 percent, using four times the one-way length.",
      "D": "About 6.4 V, or 5.3 percent, using the 200 foot out-and-back length."
    },
    "answer": "D",
    "explanation": "The current travels out and back, so the conductor length is 200 feet, the resistance is 0.4 ohms and the drop is 16 x 0.4 = 6.4 volts, which is 5.3 percent of 120 volts. Using only the one-way length counts just one conductor and halves the true figure. Using half of the length understates it still further. Using four times the one-way length double counts the return path and overstates the drop.",
    "id": 261
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "A device box holds two 12/2 cables with ground, one receptacle, and internal clamps. What is the minimum box volume required?",
    "options": {
      "A": "13.5 cubic inches, counting only the conductors and the receptacle.",
      "B": "16.0 cubic inches, counting the conductors and two clamps.",
      "C": "18.0 cubic inches, from 8 allowances at 2.25 each.",
      "D": "22.5 cubic inches, counting each ground and each clamp separately."
    },
    "answer": "C",
    "explanation": "The count is four insulated conductors, one allowance for all grounds, two for the receptacle and one for the clamps, giving 8 allowances. At 2.25 cubic inches each for 12 AWG wire, the volume is 18.0 cubic inches. Leaving out the grounds and clamps yields an undersized box. Counting two clamps is not how the rule works, since clamps together are one allowance. Counting each ground separately inflates the count, because all grounds together make one.",
    "id": 262
  },
  {
    "domain": "wiring",
    "chapter": 28,
    "question": "An electrician installs a new 15 ampere circuit that serves outlets in a bedroom. What additional protection does the code generally require?",
    "options": {
      "A": "Arc-fault circuit interrupter protection for the branch circuit.",
      "B": "A ground-fault circuit interrupter on every receptacle in the room.",
      "C": "A surge arrester at each outlet box in the room.",
      "D": "A second equipment grounding conductor run outside the cable."
    },
    "answer": "A",
    "explanation": "Section 210.12 requires arc-fault protection for 120 volt, 15 and 20 ampere circuits that supply outlets in bedrooms and most other habitable rooms. GFCI protection is required in wet or damp locations, and bedrooms are not among them. A surge arrester at each box is not a code requirement for a branch circuit. The grounding conductor inside the cable satisfies the grounding rule, and a second one outside it is not needed.",
    "id": 263
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "A technician says a ground rod outside the house will carry fault current away and trip the breaker. Which statement best corrects this belief?",
    "options": {
      "A": "Fault current prefers the earth because soil resistance is lower than that of copper conductors",
      "B": "Ground rods trip breakers only when they are driven deeper than eight feet into dry soil",
      "C": "Fault current must return to the source through metal, because earth alone cannot carry enough",
      "D": "The rod carries most of the fault current when the equipment grounding conductor is oversized"
    },
    "answer": "C",
    "explanation": "The earth is a poor conductor next to copper, and two rods of 25 ohms each in series limit a 120 volt fault to roughly 2.4 amperes, far below what trips a 20 ampere breaker. A fault clears only when current returns to the transformer winding through a low-impedance metallic loop made of the hot conductor, the equipment grounding conductor, the main bonding jumper and the neutral. Soil resistance, rod depth and conductor oversizing do not change that rule, and the code states that earth must not be treated as the fault-current path.",
    "id": 264
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "Which conductor carries current under normal operation in a 120/240 volt home and is connected to earth at the service?",
    "options": {
      "A": "The grounding electrode conductor, which runs from the service to the ground rod",
      "B": "The neutral conductor, which returns the unbalanced current of the loads",
      "C": "The equipment grounding conductor, which runs with each circuit to the device boxes",
      "D": "The main bonding jumper, which is a link between the panel bus bars"
    },
    "answer": "B",
    "explanation": "The neutral is the grounded conductor and it carries the unbalanced load current all day. The equipment grounding conductor carries current only during a fault. The grounding electrode conductor carries current only for lightning, surges and unusual events. The main bonding jumper is a short link that joins the neutral to the grounds at the service, and it carries only the fault current returning through it. Only the neutral is both grounded at the service and a working, current-carrying part of the circuit.",
    "id": 265
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "A 120 volt branch circuit has a fault from the hot conductor to a metal box. The loop resistance through hot conductor, equipment grounding conductor and source is 0.60 ohm. What is the fault current?",
    "options": {
      "A": "200 amperes, found by dividing 120 volts by 0.60 ohm",
      "B": "72 amperes, found by multiplying 120 volts by 0.60 ohm",
      "C": "20 amperes, found by dividing 120 volts by 6 ohms",
      "D": "0.005 ampere, found by dividing 0.60 ohm by 120 volts"
    },
    "answer": "A",
    "explanation": "Ohm's law gives current as voltage divided by resistance. With 120 volts and a total fault loop of 0.60 ohm, the current is 120 / 0.60 = 200 amperes, plenty to trip a 20 ampere breaker quickly. Multiplying the two numbers gives 72, which is not a current. Dividing by 6 ohms uses a loop value that nobody measured. Dividing resistance by voltage turns the formula upside down, which gives a number with the wrong units. Only the division of voltage by loop resistance produces the fault current.",
    "id": 266
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "In a detached garage subpanel fed by a four-wire feeder, what is the correct arrangement of the neutral and ground bars?",
    "options": {
      "A": "Both bars bonded to the enclosure so that neutral and ground are identical",
      "B": "Neutral bar bonded to the enclosure and the ground bar floating from it",
      "C": "Neutral bar insulated from the enclosure, with the ground bar bonded to the enclosure",
      "D": "Both bars insulated, with the metal enclosure connected only to a nearby ground rod"
    },
    "answer": "C",
    "explanation": "A subpanel fed by a four-wire feeder gets its neutral to ground bond at the service, and nowhere else. The ground bar is bonded to the can so fault current has a metal path home, while the neutral bar is isolated from the can so load current stays on the neutral conductor. Bonding both bars puts neutral current on the grounding path. Bonding only the neutral does the same thing and leaves the ground bar floating. Insulating both leaves the enclosure with no fault path and relies on a rod that cannot clear faults.",
    "id": 267
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "A 40 ampere circuit is protected by a 40 ampere breaker. Using the common table for equipment grounding conductors, what is the minimum copper size?",
    "options": {
      "A": "14 AWG copper, which is the size listed for ordinary 15 ampere lighting circuits",
      "B": "12 AWG copper, which is the size listed for protective devices rated 20 amperes",
      "C": "8 AWG copper, which is the size listed for devices rated at 100 amperes",
      "D": "10 AWG copper, the size listed for overcurrent devices from 30 through 60 amperes"
    },
    "answer": "D",
    "explanation": "Table 250.122 selects the equipment grounding conductor from the rating of the overcurrent device, and the 30 to 60 ampere range calls for 10 AWG copper. A 14 AWG conductor suits a 15 ampere device and is too small to carry the fault current of a 40 ampere circuit. The 12 AWG size belongs to 20 ampere protection and is also too small here. The 8 AWG size is for 100 ampere devices, so it exceeds the minimum, although allowed, it is not the minimum asked for.",
    "id": 268
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "An electrician installs a single ground rod and does not test it. Under the usual rule, what must be added if the rod's resistance is not shown to be 25 ohms or less?",
    "options": {
      "A": "A larger grounding electrode conductor, increased to 2 AWG aluminum for the whole run",
      "B": "A second electrode, such as another rod at least six feet away",
      "C": "A second main bonding jumper placed at the first subpanel downstream of the service",
      "D": "A separate neutral conductor run from the rod directly to the meter socket"
    },
    "answer": "B",
    "explanation": "Soil resistance varies a great deal, so the code requires a single rod to be supplemented by another electrode unless it measures 25 ohms or less. Installers normally drive a second rod at least six feet away and bond the two. A larger conductor does nothing to lower the resistance of the soil contact. A second main bonding jumper, or one at a subpanel, creates the objectionable neutral current problem. A separate neutral from the rod has no role at all, since the electrode system is not a current-carrying return.",
    "id": 269
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "A GFCI receptacle protecting a bathroom circuit sees 10.000 amperes leave on the hot conductor and 9.990 amperes return on the neutral. What happens, and why?",
    "options": {
      "A": "It stays on, because the imbalance is below the 20 ampere rating of the circuit",
      "B": "It stays on, because only an imbalance of several amperes can operate a GFCI",
      "C": "It trips, because the neutral current is smaller than the 12 milliampere reference level",
      "D": "It trips, because the 10 milliampere imbalance exceeds the roughly 6 milliampere trip threshold"
    },
    "answer": "D",
    "explanation": "A Class A GFCI compares hot and neutral current and trips when the difference reaches about 4 to 6 milliamperes. Here 10.000 minus 9.990 is 0.010 ampere, or 10 milliamperes, so the device opens. The 20 ampere rating belongs to the branch breaker and has nothing to do with the sensing threshold. A GFCI does not need amperes of imbalance. There is also no fixed 12 milliampere reference level, and the device responds to the difference between the currents, not to the neutral current itself.",
    "id": 270
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "A homeowner replaces a two-wire ungrounded receptacle with a GFCI marked 'No Equipment Ground.' Which statement about the result is correct?",
    "options": {
      "A": "Shock protection from ground faults is added, but there is still no equipment grounding path",
      "B": "A true equipment grounding path now exists, so surge protectors will work normally",
      "C": "The GFCI cannot function at all without a grounding conductor connected to it",
      "D": "Fault current now clears through the GFCI instead of the breaker, so the old wiring is safe"
    },
    "answer": "A",
    "explanation": "A GFCI senses the imbalance between hot and neutral, so it works without a grounding conductor and still protects people from ground faults on that outlet. It does not create a grounding path, and the code permits the replacement only with the label that says so. Surge protectors and some appliances that need a ground to divert energy will not work as designed. The GFCI does not take over the work of the breaker, and the old wiring still lacks a low-impedance route for fault current.",
    "id": 271
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "A 2,000 ampere, 480Y/277 volt service has an arcing ground fault of 600 amperes. Why does the main breaker fail to protect the switchboard, and what protects it instead?",
    "options": {
      "A": "The arc voltage is too high for the breaker, so only a GFCI receptacle can protect it",
      "B": "The arc stays below the breaker's pickup, so a ground-fault relay with a lower setting is required",
      "C": "The breaker trips only on short circuits above 6,000 amperes, so fuses must replace it",
      "D": "The neutral carries the arc current, so a larger grounded conductor is the only remedy"
    },
    "answer": "B",
    "explanation": "A 600 ampere arc looks like a normal load to a 2,000 ampere breaker, which allows it to burn until equipment is badly damaged. Ground-fault protection of equipment senses the residual current outside the phase conductors and trips at a lower, adjustable pickup, with a code maximum setting of 1,200 amperes for services of 1,000 amperes or more on this kind of system. A GFCI receptacle is a personnel device that cannot be used here. Replacing the breaker with fuses does not add ground sensing, and a bigger neutral does not help.",
    "id": 272
  },
  {
    "domain": "protection",
    "chapter": 29,
    "question": "An electrician finds 5 amperes on the bare feeder equipment grounding conductor to a subpanel while the loads run. Which cause is most likely?",
    "options": {
      "A": "A missing main bonding jumper at the service, which sends load current through the ground bar",
      "B": "A ground rod with resistance above 25 ohms, which lets the fault current flow continuously",
      "C": "A neutral to ground bond inside the subpanel, giving neutral current a second return path",
      "D": "A GFCI receptacle installed on the garage circuit, which moves neutral current to the ground wire"
    },
    "answer": "C",
    "explanation": "A bare grounding conductor should carry no current in normal operation. Current on it means the neutral current has found a second path, and the usual cause is a bond between the neutral bar and the enclosure at a downstream panel, which splits the return current between the neutral and the grounding path. A missing main bonding jumper would remove the fault path, not create steady current on the ground. A high-resistance rod produces no continuous current, and a GFCI does not move neutral current onto the grounding wire.",
    "id": 273
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "What does a metal oxide varistor inside a surge protective device do when line voltage rises well above its threshold during a transient?",
    "options": {
      "A": "Its resistance rises sharply, so it opens the circuit until the voltage has returned to normal",
      "B": "It stores the surge energy permanently, so the voltage on the line is lowered for good",
      "C": "Its resistance falls sharply, so it conducts the surge current away from the protected load",
      "D": "It converts the alternating voltage to direct current, which equipment can then tolerate more easily"
    },
    "answer": "C",
    "explanation": "The varistor is a voltage-sensitive resistor. At normal line voltage its resistance is very high and it passes only trivial leakage. Above its threshold the resistance collapses, and the disk conducts the surge current so the extra voltage is clamped, much like a relief valve opening. It does not open the circuit, which would leave the load exposed. It cannot store surge energy permanently, since it absorbs and dissipates it as heat, and it does no rectification of the line voltage to direct current.",
    "id": 274
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "A relay coil has an inductance of 2 henries and carries 0.5 ampere. The current is switched off in 1 millisecond. What voltage does the collapsing field produce?",
    "options": {
      "A": "About 250 volts, found from half the coil inductance times the current times the time",
      "B": "About 1,000 volts, found from the coil inductance times the current change divided by the time",
      "C": "About 1 volt, found from the inductance multiplied by the current and the time in seconds",
      "D": "About 0.001 volt, found from the current change divided by the inductance and the time"
    },
    "answer": "B",
    "explanation": "Inductive kick follows V = L x (change in current / change in time). With 2 henries, a 0.5 ampere change and 0.001 second, the rate of change is 500 amperes per second, and 2 x 500 gives 1,000 volts. Using half the inductance and multiplying by time gives a number that has no basis in the formula. Multiplying inductance, current and time yields 0.001 volt-second units that do not match, and dividing the current change by inductance and time also gives the wrong quantity.",
    "id": 275
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "An installer connects a surge protective device to a panel with 2 meters of wire. Compared with a 0.2 meter connection, what is the main consequence?",
    "options": {
      "A": "Less voltage is developed across the leads, so the longer wire gives better protection",
      "B": "The device draws more load current in normal service, so the panel wiring runs warmer",
      "C": "More inductive voltage drops across the longer leads, so the equipment sees a higher peak voltage",
      "D": "The clamping rating of the varistor changes, so the device is no longer a shunt device"
    },
    "answer": "C",
    "explanation": "A surge rises in microseconds, and a wire has inductance of roughly 1 microhenry per meter. The lead voltage is L times the rate of current change, so a 10 kiloampere surge rising in 8 microseconds adds about 2,500 volts across 2 meters, compared with 250 volts across 0.2 meter. That voltage adds to the clamping voltage, so the load sees more. Longer leads do not reduce the voltage, they do not raise normal load current through a shunt device, and they do not change the varistor's own rating.",
    "id": 276
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "A 120 volt receptacle measures 96 volts for three cycles when a well pump starts. What is the percent sag?",
    "options": {
      "A": "24 percent, since the drop of 24 volts is taken as a percentage of 100",
      "B": "20 percent, since the 24 volt drop is one fifth of the nominal 120 volts",
      "C": "80 percent, since the remaining voltage is a percentage of the nominal 120 volts",
      "D": "16 percent, since the measured 96 volts is compared with the 600 volt reference"
    },
    "answer": "B",
    "explanation": "Percent sag equals nominal minus measured, divided by nominal, times 100. Here 120 minus 96 is 24 volts, and 24 / 120 is 0.20, or 20 percent. Calling it 24 percent treats the volts as if the base were 100. Eighty percent is the voltage that remained, not the size of the sag. A 600 volt reference has no connection to this 120 volt receptacle. The sag matters because many electronic power supplies ride through about 20 percent for only a cycle or so.",
    "id": 277
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "A meter shows a fundamental current of 100 amperes, a 3rd harmonic of 30 amperes and a 5th harmonic of 20 amperes. What is the total harmonic distortion?",
    "options": {
      "A": "About 36 percent, the root of 30 squared plus 20 squared over 100",
      "B": "50 percent, from adding the 30 and 20 ampere harmonics and dividing by 100",
      "C": "20 percent, from dividing the larger harmonic by the sum of all three currents",
      "D": "25 percent, from averaging the two harmonic currents and dividing by the fundamental"
    },
    "answer": "A",
    "explanation": "THD is the root-sum-square of the harmonic currents divided by the fundamental. The squares are 900 and 400, which add to 1,300, and the square root is 36.06 amperes. Dividing by 100 gives 36.1 percent. Simply adding 30 and 20 ignores that the harmonics combine as squares and gives 50 percent. Dividing one harmonic by the sum of all three currents gives a meaningless ratio. Averaging the two harmonic currents gives 25 amperes, which is not the combined distortion either.",
    "id": 278
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "A 208Y/120 volt panel feeds many computers. Each phase carries 30 amperes of 3rd harmonic current. What 3rd harmonic current does the shared neutral carry?",
    "options": {
      "A": "0 amperes, because balanced phase currents always cancel completely in the neutral conductor",
      "B": "90 amperes, because triplen harmonics are in step and add in the neutral",
      "C": "30 amperes, because the neutral carries only the largest single phase current",
      "D": "52 amperes, because the three currents combine like phasors 120 degrees apart"
    },
    "answer": "B",
    "explanation": "Balanced fundamental currents are 120 degrees apart and cancel in the neutral, but 3rd harmonic currents are in step in all three phases, so they add arithmetically: 3 x 30 is 90 amperes. That can exceed the neutral's ampacity even though the phase conductors look fine. Zero amperes applies only to balanced linear loads. Thirty amperes ignores the other two phases. The phasor combination giving 52 amperes would apply only if the harmonic currents were spaced 120 degrees apart, which triplen harmonics are not.",
    "id": 279
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "Where is a Type 2 surge protective device installed under the standard classification used for UL 1449?",
    "options": {
      "A": "Between the service transformer and the line side of the service disconnect",
      "B": "At the receptacle, at least 30 feet of conductor length from the panel",
      "C": "Inside an electronic component assembly that is not sold as a stand-alone product",
      "D": "Load side of the service disconnect, inside or beside the main panel"
    },
    "answer": "D",
    "explanation": "A Type 2 device is permanently connected and installed on the load side of the service overcurrent device, which means at or in the main panel or subpanels. The location between the transformer and the line side of the disconnect belongs to Type 1. A point-of-use plug-in or receptacle device at least 30 feet of conductor from the panel is Type 3. A component assembly that is not sold as a stand-alone product is Type 4. For a dwelling, a Type 2 device at the main panel is the usual choice.",
    "id": 280
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "A 120/240 volt home loses its neutral at the utility. One side carries a 1,200 watt load and the other a 400 watt load. What voltage reaches the 400 watt load?",
    "options": {
      "A": "120 volts, because each load still sees its normal line to neutral voltage",
      "B": "240 volts, because the lighter load takes the full line to line voltage",
      "C": "180 volts, because the series loads divide 240 volts in proportion to resistance",
      "D": "60 volts, because the lighter load has the smaller share of the resistance"
    },
    "answer": "C",
    "explanation": "The loads have resistances of 12 ohms (1,200 watts at 120 volts) and 36 ohms (400 watts). With the neutral open they are in series across 240 volts, so current is 240 / 48 = 5 amperes. The 400 watt load drops 5 x 36 = 180 volts, and the 1,200 watt load gets 60 volts. The 120 volt answer is the normal condition that the open neutral destroys. The load cannot see the entire 240 volts while another resistance is in series. Sixty volts is the voltage on the heavier load, not the lighter one.",
    "id": 281
  },
  {
    "domain": "protection",
    "chapter": 30,
    "question": "A UPS has a 48 volt battery rated at 7 amp-hours and an inverter that is 90 percent efficient. About how long will it run a steady 400 watt load?",
    "options": {
      "A": "About 45 minutes, from 336 watt-hours times 0.90 divided by 400 watts",
      "B": "About 50 minutes, from 336 watt-hours divided by 400 watts with no losses",
      "C": "About 25 minutes, from 336 watt-hours divided by 400 watts, then halved",
      "D": "About 1 hour 24 minutes, from 48 volts times 7 amp-hours divided by 240 watts"
    },
    "answer": "A",
    "explanation": "Stored energy is 48 x 7 = 336 watt-hours. At 90 percent inverter efficiency the usable energy is 302.4 watt-hours, and dividing by 400 watts gives 0.756 hour, or about 45 minutes. Ignoring the inverter loss gives 0.84 hour, about 50 minutes, which overstates the runtime. Halving the result has no basis in the problem. Dividing by 240 watts uses a load that was not given. Real batteries deliver less at high discharge and with age, so the actual runtime would be somewhat shorter than the calculated figure.",
    "id": 282
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "Silicon is doped with phosphorus, which has five outer electrons. What type of material results, and what are its majority carriers?",
    "options": {
      "A": "P-type material, whose majority carriers are holes left over from phosphorus atoms",
      "B": "N-type material, whose majority carriers are free electrons left over from phosphorus",
      "C": "N-type material, whose majority carriers are holes created by the doping atoms",
      "D": "P-type material, whose majority carriers are free electrons supplied by phosphorus atoms"
    },
    "answer": "B",
    "explanation": "A phosphorus atom uses four of its five outer electrons to bond with silicon, leaving one free electron. Because the carriers are negative, the material is N-type and electrons are the majority carriers. Holes are the majority carriers in P-type material, which is made with a three-electron atom such as boron. Pairing N-type with holes, or P-type with free electrons, mixes up the two ideas. The doping element determines both the name of the material and the kind of carrier that dominates.",
    "id": 283
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "A 12 volt source drives a forward-biased silicon diode in series with a 1,000 ohm resistor. Ignoring other effects, what is the circuit current?",
    "options": {
      "A": "About 12 milliamperes, since the diode drop has no effect on the current",
      "B": "About 0.7 milliampere, since the diode voltage divided by the resistor gives current",
      "C": "About 8.4 milliamperes, since the diode takes 30 percent of the source voltage",
      "D": "About 11.3 milliamperes, since 11.3 volts remain across the resistor"
    },
    "answer": "D",
    "explanation": "A forward-biased silicon diode drops about 0.7 volt, leaving 12 minus 0.7 = 11.3 volts across the 1,000 ohm resistor. Current is 11.3 / 1,000 = 0.0113 ampere, or 11.3 milliamperes. Dividing the full 12 volts ignores the diode drop. Dividing only the diode voltage by the resistor gives the wrong voltage for the current. A diode does not take a percentage of the source voltage. It drops a nearly fixed amount, so the leftover voltage appears across the resistor.",
    "id": 284
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "A red LED drops 2 volts and should run at 15 milliamperes from a 12 volt supply. Which standard resistor is the best choice?",
    "options": {
      "A": "470 ohms, the standard value that gives about 40 percent more than the target current",
      "B": "1,200 ohms, the standard value that drops the full 12 volt supply",
      "C": "680 ohms, the next standard value above the calculated 667 ohms",
      "D": "100 ohms, the standard value that is closest to the LED voltage drop"
    },
    "answer": "C",
    "explanation": "The resistor must drop 12 minus 2 = 10 volts at 15 milliamperes, so R = 10 / 0.015 = 667 ohms. The next standard value up, 680 ohms, gives about 14.7 milliamperes, which is safe. A 470 ohm resistor passes about 21 milliamperes and overdrives the LED. A 1,200 ohm resistor passes only 8 milliamperes, so it would be dim, and the idea that it drops the whole supply voltage is wrong because the LED still takes 2 volts. A 100 ohm resistor would allow 100 milliamperes and destroy the LED.",
    "id": 285
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "A bridge rectifier is fed from 120 volts rms. Ignoring diode drops, what is the average DC output voltage?",
    "options": {
      "A": "About 108 volts, which is 0.9 times the rms input",
      "B": "About 54 volts, which is 0.45 times the rms input",
      "C": "About 170 volts, which is 1.414 times the rms input",
      "D": "About 76 volts, which is 0.636 times the rms input"
    },
    "answer": "A",
    "explanation": "A full-wave bridge has an average output of 0.636 times the peak, or 0.9 times the rms value. The peak is 120 x 1.414 = 169.7 volts, and 0.636 x 169.7 is about 108 volts. The figure of 54 volts is the half-wave average, which uses only half of the wave. The 170 volt value is the peak, which a filter capacitor can approach but the unfiltered average does not reach. The figure of 76 volts comes from applying 0.636 to the rms value instead of to the peak.",
    "id": 286
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "A transformer secondary of 12.6 volts rms feeds a silicon bridge rectifier with no filter. What is the approximate peak output voltage?",
    "options": {
      "A": "About 17.8 volts, because diode drops do not reduce the output of bridge circuits",
      "B": "About 16.4 volts, after two diode drops come off the 17.8 volt peak",
      "C": "About 12.6 volts, because the peak output equals the rms value of the secondary",
      "D": "About 35.6 volts, because a bridge doubles the secondary peak voltage"
    },
    "answer": "B",
    "explanation": "The secondary peak is 12.6 x 1.414 = 17.8 volts. In a bridge, current always passes through two diodes in series, so about 1.4 volts is lost, giving a peak output near 16.4 volts. Claiming that diode drops do not matter ignores the conducting pair. The rms value is not the peak. Doubling the peak is the behavior of a voltage-doubler circuit using capacitors, not an ordinary bridge. Estimating these figures tells the technician what a healthy supply should read.",
    "id": 287
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "A full-wave supply delivers 0.5 ampere through a 4,700 microfarad filter capacitor at 120 hertz ripple frequency. What is the approximate peak-to-peak ripple?",
    "options": {
      "A": "About 1.77 volts, found from using a 60 hertz ripple frequency in the formula",
      "B": "About 0.22 volt, found from dividing the load current by four times the capacitance",
      "C": "About 11 volts, found from multiplying the load current by the capacitance in microfarads",
      "D": "About 0.89 volt, found from the load current divided by frequency times capacitance"
    },
    "answer": "D",
    "explanation": "Ripple is approximately I / (f x C). With 0.5 ampere, 120 hertz and 0.0047 farad, the denominator is 120 x 0.0047 = 0.564, and 0.5 / 0.564 = 0.887 volt peak-to-peak. A value of 1.77 volts would apply to a half-wave circuit with 60 hertz ripple. The 0.22 volt answer invents a factor of four that is not in the formula. Multiplying the current by the capacitance in microfarads mixes units and gives a meaningless figure.",
    "id": 288
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "A 7805 regulator is fed 12 volts and supplies a steady 0.5 ampere at 5 volts. How much power does the regulator dissipate as heat?",
    "options": {
      "A": "2.5 watts, found from the 5 volt output multiplied by 0.5 ampere",
      "B": "6.0 watts, found from the 12 volt input multiplied by 0.5 ampere",
      "C": "3.5 watts, found from the 7 volt difference multiplied by 0.5 ampere",
      "D": "1.0 watt, found from the 2 volt difference multiplied by 0.5 ampere"
    },
    "answer": "C",
    "explanation": "A linear regulator drops the excess voltage and turns it into heat: P = (Vin minus Vout) x I = (12 minus 5) x 0.5 = 3.5 watts. That much heat requires a heat sink. The 2.5 watts is the power delivered to the load, not the loss in the regulator. The 6 watts is the total input power and includes the load. The 1.0 watt answer uses a voltage difference that does not match the problem. Efficiency here is 2.5 / 6, about 42 percent.",
    "id": 289
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "A 12 volt relay coil of 400 ohms is switched by a transistor with a minimum gain of 100. What is the minimum base current needed?",
    "options": {
      "A": "0.3 milliampere, since the 30 milliampere coil current divided by the gain is 0.3",
      "B": "30 milliamperes, since the base must carry the same current as the relay coil",
      "C": "3 milliamperes, since the gain multiplies the coil current by ten",
      "D": "0.03 milliampere, since the gain is divided into the coil resistance"
    },
    "answer": "A",
    "explanation": "The coil current is 12 / 400 = 0.030 ampere, or 30 milliamperes. With a gain of 100, Ib = Ic / beta = 30 / 100 = 0.3 milliampere is the minimum. A designer would then supply several times that to make sure of saturation. Requiring 30 milliamperes at the base would defeat the purpose of the transistor. The figure of 3 milliamperes is a common overdrive value, not the minimum. Dividing the gain into the resistance mixes unrelated quantities and gives a value with no meaning.",
    "id": 290
  },
  {
    "domain": "electronics",
    "chapter": 31,
    "question": "A variable-frequency drive is fed from a 480 volt three-phase line through a diode bridge. About what DC bus voltage should a technician expect?",
    "options": {
      "A": "About 480 volts, since a rectifier output equals the rms line voltage",
      "B": "About 340 volts, since the bus is half the peak of the line voltage",
      "C": "About 680 volts, since the 480 volt line has a peak near 679",
      "D": "About 830 volts, since the bus is the three-phase factor times the rms line"
    },
    "answer": "C",
    "explanation": "The DC bus capacitors charge to the peak of the line-to-line voltage, which is 480 x 1.414 = 679 volts. Expect readings near 680 volts, higher on a high line. The rms value of 480 is not the peak and understates the bus. Half the peak applies to a different arrangement entirely. The figure of 830 volts comes from multiplying by a three-phase factor that does not apply to a rectified bus. Because the bus stays charged after power is off, drives specify a wait and a voltage check before opening them.",
    "id": 291
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "An electrician needs a meter to measure voltage inside a distribution panel and at feeder conductors. Which meter rating is the appropriate minimum category?",
    "options": {
      "A": "CAT I, because panel circuits carry too little energy to need a higher category",
      "B": "CAT II, because panels are equivalent to ordinary receptacle-connected loads",
      "C": "CAT IV only, because every panel measurement is made at the utility service point",
      "D": "CAT III with a voltage rating that meets or exceeds the system voltage"
    },
    "answer": "D",
    "explanation": "Measurement categories describe the fault energy available where a meter is used. Distribution equipment such as panels, feeders and hard-wired equipment calls for CAT III, rated at or above the system voltage, with CAT IV used at the service origin. CAT I is for protected electronic circuits and does not suit a panel. CAT II is meant for receptacle-connected loads on branch circuits and has less energy withstand. A CAT IV meter is not mandatory for every panel measurement, though it is acceptable and is the better choice for service work.",
    "id": 292
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "A disconnected wire alongside an energized one reads 70 volts on a high-impedance meter, and 2 volts when the low-impedance mode is selected. What does this indicate?",
    "options": {
      "A": "A live conductor, since any reading above 50 volts means the wire is energized",
      "B": "An induced ghost voltage, since a real source would stay near full voltage",
      "C": "A failed meter, since the two modes must always show the same value",
      "D": "A shorted conductor, since the reading falls when more current is drawn"
    },
    "answer": "B",
    "explanation": "A high-impedance meter draws almost no current, so capacitive coupling to a nearby live wire can raise its reading. The low-impedance mode puts a load of a few thousand ohms across the probes, which drains the induced voltage to near zero, while a truly live conductor would stay near full voltage. The two modes are expected to differ in this case, so the meter is not failing. A short circuit would not make a reading fall to 2 volts in this way. The reading alone does not prove the wire is live, which is why proving dead matters.",
    "id": 293
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "A 20 ampere circuit carries 12 amperes. A voltmeter placed across one terminal connection reads 3.6 volts. What is the resistance and heat in that connection?",
    "options": {
      "A": "0.3 ohm and about 43 watts, so the connection is badly overheating",
      "B": "0.3 ohm and about 4.3 watts, so the connection is slightly warm",
      "C": "3.0 ohms and about 43 watts, so the connection should be replaced",
      "D": "0.3 ohm and about 13 watts, so the connection would glow red"
    },
    "answer": "A",
    "explanation": "Resistance is voltage divided by current: 3.6 / 12 = 0.3 ohm. Power is voltage times current: 3.6 x 12 = 43.2 watts, concentrated in a spot the size of a terminal screw. That is a serious fire hazard. Reporting 4.3 watts misplaces the decimal, 3.0 ohms inverts the digits of the correct resistance, and 13 watts comes from squaring the voltage and not multiplying by the current. The connection should be locked out, cleaned, retightened to the specified torque or replaced, and then retested under load.",
    "id": 294
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "A three-phase motor shows line currents of 18.2, 17.6 and 19.8 amperes. What is the approximate current unbalance?",
    "options": {
      "A": "About 11.9 percent, from the spread between highest and lowest divided by the average",
      "B": "About 6.8 percent, from the largest deviation divided by the average current",
      "C": "About 1.1 percent, from the middle reading minus the average divided by 100",
      "D": "About 9.4 percent, from the highest reading minus nameplate divided by the average"
    },
    "answer": "B",
    "explanation": "The average is 55.6 / 3 = 18.53 amperes. The largest deviation from the average is 19.8 minus 18.53 = 1.27 amperes, and 1.27 / 18.53 x 100 is about 6.8 percent. Using the spread between the highest and lowest readings overstates the figure, because unbalance uses deviation from the average. The middle reading is not the largest deviation, and dividing by 100 is meaningless here. A comparison with nameplate current does not measure unbalance. A reading near 7 percent warrants investigating the supply and the connections.",
    "id": 295
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "In a series control circuit with a stop button, an overload contact, a start button and a coil, a voltmeter reads 120 volts across the overload contact and 0 volts across the others. What is the cause?",
    "options": {
      "A": "The coil is shorted, so the full control voltage drops across the neighboring contact",
      "B": "The stop button is open, so the voltage appears across the overload contact",
      "C": "The control fuse is blown, so the meter reads source voltage across the overload",
      "D": "The overload contact is open, so the full control voltage appears across it"
    },
    "answer": "D",
    "explanation": "In a series chain, an open device holds the whole supply voltage across itself, and closed devices read nearly zero. The meter shows 120 volts across the overload contact only, so that contact is the open one, which means the overload relay has tripped or its contact has failed. A shorted coil would draw heavy current and would not leave voltage across a contact. An open stop button would show the source voltage across the button itself. A blown fuse would leave zero volts across every device in the chain.",
    "id": 296
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "Line-to-line voltages at a 480 volt motor read 462, 458 and 470 volts. What is the approximate voltage unbalance?",
    "options": {
      "A": "About 2.6 percent, found from the full spread divided by the lowest reading",
      "B": "About 1.4 percent, found from the largest deviation divided by the average",
      "C": "About 0.3 percent, found from the lowest deviation divided by the average",
      "D": "About 12 percent, found from the highest reading minus 458 divided by 100"
    },
    "answer": "B",
    "explanation": "The average is (462 + 458 + 470) / 3 = 463.3 volts. The largest deviation from the average is 470 minus 463.3 = 6.7 volts, so unbalance is 6.7 / 463.3 x 100, which is about 1.4 percent. The spread of 12 volts over the lowest reading is not the standard method. The lowest deviation is not used. Dividing a voltage difference by 100 gives no percentage. Because motor current unbalance is typically several times the voltage unbalance, even this value can cause a noticeable current imbalance.",
    "id": 297
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "A 480 volt motor's winding to frame reading is 0.3 megohm at a 500 volt test. A reasonable conclusion and action is which of the following?",
    "options": {
      "A": "Insulation is acceptable, since any reading above zero means the winding is sound",
      "B": "Insulation is excellent, since readings below 1 megohm indicate a clean winding",
      "C": "The megohmmeter is faulty, since healthy motors always read exactly 500 megohms",
      "D": "Insulation is weak, so keep the motor de-energized until the cause is found"
    },
    "answer": "D",
    "explanation": "A common rule of thumb asks for at least 1 megohm per 1,000 volts of rating, with a minimum of 1 megohm, and a reading of 0.3 megohm falls below it. The leakage at 500 volts is 500 / 300,000, about 1.7 milliamperes, and it can worsen as the motor warms or becomes damp. The motor should stay off until the cause, such as moisture or damaged insulation, is found. A nonzero reading alone does not prove soundness. Low readings are not a sign of a clean winding. Healthy motors do not read a single fixed value, and the meter is not the likely problem.",
    "id": 298
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "Before trusting a meter reading of zero volts on a conductor you plan to work on, what is the correct sequence under the live-dead-live method?",
    "options": {
      "A": "Prove the meter on a known source, test the conductor, prove it again",
      "B": "Test the conductor first, then prove the meter once after the work is complete",
      "C": "Prove the meter on the conductor, then trust a single reading of zero volts",
      "D": "Measure resistance on the energized conductor, then confirm with a continuity beep"
    },
    "answer": "A",
    "explanation": "A meter with a dead battery or blown fuse reads zero on everything, so a zero is only meaningful if the meter is proved on a known live source before the test and again afterward to show it did not fail during the test. Testing first and proving after the work is too late. Relying on a single zero reading, or proving the meter only on the conductor in question, defeats the purpose. Resistance and continuity are never measured on an energized conductor, because the meter supplies its own current and could be damaged.",
    "id": 299
  },
  {
    "domain": "troubleshooting",
    "chapter": 32,
    "question": "With the disconnect closed, a three-phase motor hums and does not start. Voltage at its terminals is 480 volts L1 to L2, but only about 240 volts from L3 to each of the other two. What is the likely cause?",
    "options": {
      "A": "The motor winding is shorted, so the voltage collapses between two terminals",
      "B": "The overload relay is set too low, so it drops one of the three phases",
      "C": "One phase is open upstream, such as a blown fuse, so the motor is single-phasing",
      "D": "The supply is balanced, so the zero reading is only a meter error"
    },
    "answer": "C",
    "explanation": "L1 and L2 are both present at the motor, and L3 reads only a fraction of line voltage, fed back through the motor windings, so the open is in the L3 supply, often a blown fuse. A shorted winding would not make an external supply reading go to zero in this pattern. An overload relay set too low trips the starter and does not remove a phase voltage. A balanced supply would show three similar readings, so the zero is not a meter error.",
    "id": 300
  }
];
