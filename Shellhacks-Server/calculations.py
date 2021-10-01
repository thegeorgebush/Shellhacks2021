import sys

pay_rate = float(sys.argv[1])
ot_rate = pay_rate * 1.5
#print("payrate ", pay_rate)

hours = float(sys.argv[2])

if hours > 40:
    ot = (hours - 40)
elif hours < 40:
    ot = 0
elif hours == 40:
    ot = 0

reg_hours = hours - ot

paycheck= ((reg_hours*pay_rate)+(ot*ot_rate))*2




gross_income = paycheck *(26)
gross_income_1 =float(gross_income) 

#print('gross income: ', gross_income)

#tax estimations
#used to check if elif below

#found error in bracket 5

tax_1 = .1
tax_2 =.12
tax_3 =.22
tax_4 =.24
tax_5=.32
tax_6=.35
tax_7=.37
bracket_1 = 10000
bracket_2= 40525
bracket_3 = 86375
bracket_4 = 164925
bracket_5 =209425
bracket_6 =523600



if gross_income_1 < bracket_1:
    fed_tax = tax_1 * gross_income_1
elif gross_income_1 < bracket_2:
    fed_tax = tax_2 * (gross_income_1 - bracket_1) + tax_1*(bracket_1)
elif gross_income_1 < bracket_3:
    fed_tax = tax_3* (gross_income_1-bracket_2) + (tax_2*(bracket_2-bracket_1))+ tax_1*(bracket_1)
elif gross_income_1 < bracket_4:
    fed_tax = tax_4* (gross_income_1-bracket_3) + (tax_3*(bracket_3-bracket_2))+ (tax_2*(bracket_2-bracket_1))+ tax_1*(bracket_1)
elif gross_income_1 < bracket_5:
    fed_tax = tax_5* (gross_income_1-bracket_4)+(tax_4*(bracket_4-bracket_3))+(tax_3*(bracket_3-bracket_2))+(tax_2*(bracket_2-bracket_1))+ tax_1*(bracket_1)
elif gross_income_1 < bracket_6:
    fed_tax = tax_6*(gross_income_1-bracket_5)+ (tax_5* (bracket_5-bracket_4))+(tax_4*(bracket_4-bracket_3))+(tax_3*(bracket_3-bracket_2))+(tax_2*(bracket_2-bracket_1))+ tax_1*(bracket_1)
elif gross_income_1>bracket_6:
    fed_tax = tax_7*(gross_income_1-bracket_6)+(tax_6* (bracket_6-bracket_5))+ (tax_5* (bracket_5-bracket_4))+(tax_4*(bracket_4-bracket_3))+(tax_3*(bracket_3-bracket_2))+(tax_2*(bracket_2-bracket_1))+ tax_1*(bracket_1)
#ss&mc

if gross_income_1 < 142800:
    entitlements= .062*gross_income_1+.0145*gross_income_1
elif gross_income_1 > 142800:
    entitlements=.062*(142800)+.0145*142800


net_income = gross_income_1-fed_tax-entitlements



results = {
"paycheck": paycheck,
"grossIncome": gross_income_1,
"tax": fed_tax,
"entitlements": entitlements,
"netIncome": net_income
}

print(str(results))
sys.stdout.flush()